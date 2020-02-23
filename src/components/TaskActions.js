import React from 'react';
import Button from '@material-ui/core/Button';

const TaskActions = ({ createNewTask }) => {

  return (
    <div className="task-actions">
      <Button
        color="primary"
        onClick={createNewTask}
        variant="contained"
      >
        New Task
      </Button>
    </div>
  )
}

TaskActions.propTypes = {

}

export default TaskActions;
