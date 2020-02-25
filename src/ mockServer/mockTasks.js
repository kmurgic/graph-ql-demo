const tasks = [
  {
    id: 1,
    assignee: {
      id: '1',
      name: 'Caleb',
    },
    category: {
      id: 'house',
      name: 'House'
    },
    description: 'Finish presentation',
    isComplete: false,
    estimatedTime: 720,
  },
  {
    id: 2,
    assignee: {
      id: '4',
      name: 'Yasha',
    },
    category: {
      id: 'house',
      name: 'House'
    },
    description: 'Vacuum',
    isComplete: false,
    estimatedTime: 30,
  },
  {
    id: 3,
    assignee: {
      id: '2',
      name: 'Bo',
    },
    category: {
      id: 'house',
      name: 'House'
    },
    description: 'Make bed',
    isComplete: false,
    estimatedTime: 10,
  },
  {
    id: 4,
    assignee: {
      id: '3',
      name: 'Molly',
    },
    category: {
      id: 'house',
      name: 'House'
    },
    description: 'Meet with Ivo',
    isComplete: false,
    estimatedTime: 45,
  },
];

export default tasks;
