export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action.type = ABC no está implementada')
    case 'AGREGAR':
      return initialState
    default:
      return initialState
  }
}
