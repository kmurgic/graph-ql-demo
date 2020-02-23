import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewTaskDialog = ({ open, close }) => {
  const [assignee, setAsignee] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    close();
  }

  return (
    <Dialog
      open={open}
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
            value={assignee}
            variant="outlined"
          />
          <TextField
            className="new-task-input"
            fullWidth
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            value={description}
            variant="outlined"
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
          >
            Create Task
        </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewTaskDialog;
