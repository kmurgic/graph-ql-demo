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
    Yard
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
    estimatedTime: Int
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

  input AddTaskInput {
    assignee: UserInput!
    category: CategoryInput!
    description: String!
    estimatedTime: Int
  }

  input UpdateTaskInput {
    id: ID!
    assignee: UserInput
    category: CategoryInput
    description: String
    estimatedTime: Int
  }

  type DeleteTaskResponse {
    id: ID!
  }

  type Mutation {
    addTask(newTask: AddTaskInput!): Task!
    updateTask(updates: UpdateTaskInput!): Task!
    removeTask(id: ID!): DeleteTaskResponse!
  }
`

module.exports = typeDefs;
