const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: 'false'
}]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR':
      return { ...state }
  }
}

todoReducer()
