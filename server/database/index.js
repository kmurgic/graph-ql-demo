const users = require('./users');
const tasks = require('./tasks');
const categories = require('./categories');
const uuid = require('uuid/v4');

const data = {
  users,
  tasks,
  categories
};

const getCategories = () => data.categories;
const getUsers = () => data.users;
const getTasks = () => data.tasks;
const addTask = (task) => {
  const id = uuid();
  const newTask = { id, isComplete: false, ...task };
  data.tasks.push(newTask);
  return newTask;
}
const updateTask = (updates) => {
  const id = updates.id;
  let updatedTask;
  const newTasks = data.tasks.map(task => {
    if (task.id !== id) return task;
    updatedTask = { ...task, ...updates };
    return updatedTask;
  });
  data.tasks = newTasks;
  return updatedTask;
};
const deleteTask = (id) => {
  const newTasks = data.tasks.filter(task => task.id !== id);
  data.tasks = newTasks;
  return { id };
}

module.exports = {
  getCategories,
  getUsers,
  getTasks,
  addTask,
  updateTask,
  deleteTask
}