const database = require('./database');

const resolvers = {
  Query: {
    categories() {
      return database.getCategories();
    },
    users() {
      return database.getUsers();
    },
    tasks() {
      return database.getTasks();
    }
  },
  Mutation: {
    addTask(_, newTask) {
      return database.addTask(newTask);
    },
    updateTask(_, updates) {
      return database.updateTask(updates);
    },
    deleteTask(_, { id }) {
      return database.deleteTask(id);
    }
  }
}

module.exports = resolvers;