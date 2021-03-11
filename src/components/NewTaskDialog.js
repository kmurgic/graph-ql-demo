import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { ADD_TASK } from '../mutations';
import { GET_TASKS } from '../queries';
import { DialogActions } from '@material-ui/core';


const NewTaskDialog = (props) => {
  const { categories, close, users } = props;
  const [assignee, setAsignee] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('house');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleError = (err) => console.error(err);
  const [addTask, { loading }] = useMutation(ADD_TASK, {
    onError: handleError,
    onCompleted: () => close()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      variables: {
        newTask: {
          assignee: {
            id: assignee,
            name: users.find(user => user.id === assignee)?.name || '',
          },
          category: {
            id: category,
            name: categories.find(cat => cat.id === category)?.name || '',
          },
          description,
          estimatedTime: estimatedTime ? Number(estimatedTime): undefined,
        }
      }
    });
  }

  return (
    <Dialog
      disableBackdropClick={loading}
      open
      onClose={close}
    >
      <DialogTitle>Create New Task</DialogTitle>
      <DialogContent className="new-task-form">
        <form onSubmit={handleSubmit}>
          <TextField
            className="new-task-input"
            fullWidth
            label="Asignee"
            onChange={(e) => setAsignee(e.target.value)}
            required
            select
            value={assignee}
            variant="outlined"
          >
            {users.map(user => (
              <MenuItem
                key={user.id}
                value={user.id}
              >
                {user.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="new-task-input"
            fullWidth
            label="Description"
            multiline
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            value={description}
            variant="outlined"
          />
          <TextField
            className="new-task-input"
            fullWidth
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            required
            select
            value={category}
            variant="outlined"
          >
            {categories.map(category => (
              <MenuItem
                key={category.id}
                value={category.id}
              >
                {category.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="new-task-input"
            fullWidth
            label="Estimated Time (minutes)"
            InputProps={{ type: 'number' }}
            onChange={(e) => setEstimatedTime(e.target.value)}
            value={estimatedTime}
            variant="outlined"
          />
          <DialogActions>
            <Button
              color="default"
              disabled={loading}
              onClick={(e) => close()}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              disabled={loading}
              type="submit"
              variant="contained"
            >
              Create Task
            </Button>
          </DialogActions>

        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewTaskDialog;
