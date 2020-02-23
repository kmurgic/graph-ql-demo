import React, { useState } from 'react';
import TaskActions from './TaskActions';
import TaskTable from './TaskTable';
import NewTaskDialog from './NewTaskDialog';

const TaskManager = props => {
  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false);


  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <TaskActions
        createNewTask={() => setNewTaskDialogOpen(true)}
      />
      <TaskTable />
      <NewTaskDialog
        open={newTaskDialogOpen}
        close={() => setNewTaskDialogOpen(false)}
      />
    </div>
  )
}

export default TaskManager;
