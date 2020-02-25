import gql from 'graphql-tag';
import { TaskFragment } from '../fragments';


export const GET_USERS_AND_CATEGORIES = gql`
  {
    users {
      id
      name
    }
    categories {
      id
      name
    }
  }
`
export const GET_TASKS = gql`
  {
    tasks {
      ...TaskInfo
    }
  }
  ${TaskFragment}
`;
