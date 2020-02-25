import gql from 'graphql-tag';

export const TaskFragment = gql`
  fragment TaskInfo on Task {
    id
    assignee {
      id
      name
    }
    category {
      id
      name
    }
    description
    estimatedTime
  }
`