const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  enum CategoryName {
    House
    Livestock
    Garden
  }

  type Category {
    id: ID!
    name: CategoryName!
  }

  type Task {
    id: ID!
    assignee: User!
    category: Category!
    description: String!
    isComplete: Boolean!
    estimatedTime: Int
    actualTime: Int
  }

  type Query {
    categories: [Category!]
    tasks: [Task!]
    users: [User!]
  }

  input UserInput {
    id: ID!
    name: String!
  }

  input CategoryInput {
    id: ID!
    name: String!
  }

  input addTaskInput {
    id: ID!
    assignee: UserInput!
    category: CategoryInput!
    description: String!
    estimatedTime: Int
  }

  input updateTaskInput {
    id: ID!
    assignee: UserInput
    category: CategoryInput
    description: String
    isComplete: Boolean
    estimatedTime: Int
    actualTime: Int
  }

  type deleteTaskResponse {
    id: ID!
  }

  type Mutation {
    addTask(input: addTaskInput!): Task!
    updateTask(input: updateTaskInput!): Task!
    deleteTask(id: ID!): deleteTaskResponse!
  }
`

module.exports = typeDefs;
