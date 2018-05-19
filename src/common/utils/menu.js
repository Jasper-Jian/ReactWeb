export const allMenu = [
  {
    name: 'Home',
    url: 'index',
    icon: 'home',
  }, {
    name: 'Music',
    url: 'music',
    icon: 'bars',
    children: [
      { name: 'Music', url: 'music' },
    ]
  }, 
  {
    name: 'Tools',
    url: 'tools',
    icon: 'tool',
    children: [
      { name: 'Calculator', url: 'tools' },
      { name: 'To Do List', url: 'todoList' },
    ],
  },
  {
    name: 'Search Engine',
    url: 'search',
    icon: 'search',
    children: [
      { name: 'Search Engine', url: 'searchEngine' },
    ],
  }]
