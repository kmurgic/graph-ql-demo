import React, { useState } from 'react';
import TaskActions from './TaskActions';
import TaskTable from './TaskTable';
import NewTaskDialog from './NewTaskDialog';
import mockTasks from '../ mockServer/mockTasks';

const TaskManager = props => {
  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false);
  const [tasks, setTasks] = useState(mockTasks);
  const toggleTaskComplete = id => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id !== id) return task;
      return { ...task, isComplete: !task.isComplete };
    }));
  }

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <TaskActions
        createNewTask={() => setNewTaskDialogOpen(true)}
      />
      <TaskTable tasks={tasks} toggleTaskComplete={toggleTaskComplete} />
      <NewTaskDialog
        open={newTaskDialogOpen}
        close={() => setNewTaskDialogOpen(false)}
      />
    </div>
  )
}

export default TaskManager;
