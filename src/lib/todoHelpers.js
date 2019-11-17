export const addTodo = (list, item) => 
  [...list, item]
  // list.concat(item)

export const generateID = () => Math.floor(Math.random() * 100000)