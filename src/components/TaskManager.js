import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import TaskActions from './TaskActions';
import TaskTable from './TaskTable';
import NewTaskDialog from './NewTaskDialog';
import EditTaskDialog from './EditTaskDialog';
import { GET_TASKS, GET_USERS_AND_CATEGORIES } from '../queries';

const TaskManager = () => {
  const [newTaskDialogOpen, setTaskDialogOpen] = useState(false);

  const {
    data: taskData,
    loading: tasksLoading,
    error: tasksError
  } = useQuery(GET_TASKS);

  const {
    data: usersAndCategoriesData,
    loading: usersAndCategoriesLoading,
    error: usersAndCategoriesError
  } = useQuery(GET_USERS_AND_CATEGORIES);

  const loading = tasksLoading || usersAndCategoriesLoading;
  const error = !!tasksError || !!usersAndCategoriesError;

  const { categories, users } = usersAndCategoriesData || {};
  const { tasks } = taskData || {};
  const [activeTask, setActiveTask] = useState(null);

  const closeNewTaskDialog = () => {
    setTaskDialogOpen(false);
  }
  const closeEditTaskDialog = () => {
    setActiveTask(null);
  }
  const openEditTask = (id) => {
    setActiveTask(tasks.find(task => task.id === id));
  }

  if (loading) return 'Loading...'
  if (error) return 'Server Error!';

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <TaskActions
        createNewTask={() => setTaskDialogOpen(true)}
      />
      {tasks.length
        ? (
          <TaskTable
            tasks={tasks}
            editTask={openEditTask}
          />
        )
        : <Typography>No tasks assigned.</Typography>
      }
      {newTaskDialogOpen &&
        <NewTaskDialog
          categories={categories}
          close={closeNewTaskDialog}
          task={activeTask}
          users={users}
        />
      }
      {activeTask &&
        <EditTaskDialog
          categories={categories}
          close={closeEditTaskDialog}
          task={activeTask}
          users={users}
        />
      }
    </div>
  )
}

export default TaskManager;
