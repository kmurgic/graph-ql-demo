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
    isComplete: true,
    estimatedTime: 30,
    actualTime: 20,
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
    isComplete: true,
    estimatedTime: 10,
    actualTime: 12
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
    isComplete: true,
    estimatedTime: 45,
    actualTime: 60
  },
];

export default tasks;
