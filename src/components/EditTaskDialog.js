import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { UPDATE_TASK } from '../mutations';
import { GET_TASKS } from '../queries';
import { DialogActions } from '@material-ui/core';


const EditTaskDialog = (props) => {
  const { categories, close, task, users } = props;
  const [assignee, setAsignee] = useState(task?.assignee?.id || '');
  const [description, setDescription] = useState(task?.description || '');
  const [category, setCategory] = useState(task?.category?.id || 'house');
  const [estimatedTime, setEstimatedTime] = useState(task?.estimatedTime || '');
  const [actualTime, setActualTime] = useState(task?.actualTime || '');

  const handleError = (err) => console.error(err);

  const [updateTask, { loading }] = useMutation(UPDATE_TASK, {
    onError: handleError,
    refetchQueries: [{ query: GET_TASKS }],
    onCompleted: () => close()
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({
      variables: {
        updates: {
          id: task.id,
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
          actualTime: actualTime ? Number(actualTime) : undefined
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
      <DialogTitle>Edit Task</DialogTitle>
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
          {task?.isComplete && (
            <TextField
              className="new-task-input"
              fullWidth
              label="Actual Time (minutes)"
              InputProps={{ type: 'number' }}
              onChange={(e) => setActualTime(e.target.value)}
              value={actualTime}
              variant="outlined"
            />
          )}
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
              Save Changes
            </Button>
          </DialogActions>

        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditTaskDialog;
