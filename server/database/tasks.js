const tasks = [
  {
    id: '1',
    assignee: {
      id: '1',
      name: 'Caleb',
    },
    category: {
      id: 'yard',
      name: 'Yard'
    },
    description: 'Mow lawn',
    isComplete: false,
    estimatedTime: 75,
  },
  {
    id: '2',
    assignee: {
      id: '4',
      name: 'Yasha',
    },
    category: {
      id: 'garden',
      name: 'Garden'
    },
    description: 'Weed tomato bed',
    isComplete: false,
    estimatedTime: 50,
  },
  {
    id: '3',
    assignee: {
      id: '2',
      name: 'Bo',
    },
    category: {
      id: 'house',
      name: 'House'
    },
    description: 'Vacuum living room and kitchen',
    isComplete: false,
    estimatedTime: 30,
  },
  {
    id: '4',
    assignee: {
      id: '3',
      name: 'Molly',
    },
    category: {
      id: 'livestock',
      name: 'Livestock'
    },
    description: 'Milk goats',
    isComplete: false,
    estimatedTime: 45,
  },
];

module.exports = tasks;