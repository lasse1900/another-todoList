export const addTodo = (list, item) =>
  [...list, item]
// list.concat(item)

export const generateId = () => Math.floor(Math.random() * 100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete })

// export const updateTodo = (list, updated) => {
//   const updatedIndex = list.findIndex(item => item.id === updated.id)
//   return [
//     ...list.slice(0, updatedIndex),
//     updated,
//     ...list.slice(updatedIndex+1)
//   ]
// }

export const updateTodo = (list, updated) =>
  list.map(todo => todo.id === updated.id ? updated : todo);


export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex + 1)
  ]
}

export const filterTodos = (list, route) => {
  switch (route) {
    case '/active':
      return list.filter(item => !item.isComplete)
    case '/complete':
      return list.filter(item => item.isComplete)
    default:
      return list
  }
}

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

test('test - Redux', () => {
  expect(
    counter(0, { type: 'INCREMENT' })
  ).toEqual(1);

  expect(
    counter(1, { type: 'INCREMENT' })
  ).toEqual(2);

  expect(
    counter(2, { type: 'DECREMENT' })
  ).toEqual(1);

  expect(
    counter(1, { type: 'DECREMENT' })
  ).toEqual(0);

  expect(
    counter(1, { type: 'SOMETHING_ELSE' })
  ).toEqual(1);

  expect(
    counter(undefined, {})
  ).toEqual(0);

})