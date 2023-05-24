export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = ABC no está implementada')
    case 'AGREGAR':
      // console.log('REDUCER ADD')
      return [...state, action.payload] // TODO
    case 'BORRAR':
      return state.filter(todo => todo.id !== action.payload) // id
    case 'HECHO':
      return state.map(todo => {
        if (todo.id === action.payload) { // id
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
    default:
      return [...state]
  }
}
