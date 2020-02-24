import React, { useState } from 'react';
import TaskActions from './TaskActions';
import TaskTable from './TaskTable';
import TaskDialog from './TaskDialog';
import mockTasks from '../ mockServer/mockTasks';

const TaskManager = props => {
  const [newTaskDialogOpen, setTaskDialogOpen] = useState(false);
  const [tasks, setTasks] = useState(mockTasks);
  const [activeTask, setActiveTask] = useState(null);
  const toggleTaskComplete = id => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id !== id) return task;
      return { ...task, isComplete: !task.isComplete };
    }));
  }
  const removeTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }
  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setActiveTask(null);
    setTaskDialogOpen(false);
  }
  const closeTaskDialog = () => {
    setActiveTask(null);
    setTaskDialogOpen(false);
  }
  const openEditTask = (id) => {
    setActiveTask(tasks.find(task => task.id === id));
  }
  const completeEditTask = (newTask) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id !== newTask.id) return task;
      return { id: task.id, ...newTask }
    }))
    setActiveTask(null);
  }

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <TaskActions
        createNewTask={() => setTaskDialogOpen(true)}
      />
      <TaskTable
        tasks={tasks}
        editTask={openEditTask}
        removeTask={removeTask}
        toggleTaskComplete={toggleTaskComplete} />
      {(newTaskDialogOpen || activeTask) &&
        <TaskDialog
          submit={activeTask ? completeEditTask : addTask}
          close={() => closeTaskDialog(false)}
          task={activeTask}
        />
      }
    </div>
  )
}

export default TaskManager;
