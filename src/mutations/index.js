import gql from 'graphql-tag';
import { TaskFragment } from '../fragments';

export const ADD_TASK = gql`
  mutation addTaskMutation ($newTask: AddTaskInput!) {
    addTask (newTask: $newTask) {
      ...TaskInfo
    }
  }
  ${TaskFragment}
`;

export const REMOVE_TASK = gql`
  mutation removeTaskMutation($id: ID!) {
    removeTask(id: $id) {
      id
    }
  }
`

export const UPDATE_TASK = gql`
  mutation updateTaskMutation($updates: UpdateTaskInput!) {
    updateTask(updates: $updates) {
      ...TaskInfo
    }
  }
  ${TaskFragment}
`