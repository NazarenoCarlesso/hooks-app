import { todoReducer } from '../../reducers/todoReducer'

describe('todoReducer testing... ', () => {
  const initialState = [{
    id: 1,
    todo: 'Demo Todo',
    done: false
  }]

  test('debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toEqual(initialState)
  })

  test('debe de agregar un todo', () => {
    const action = {
      type: 'AGREGAR',
      payload: {
        id: 2,
        todo: 'Todo Created',
        done: false
      }
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('debe de borrar un todo', () => {
    const action = {
      type: 'BORRAR',
      payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)
    expect(newState).toEqual([])
  })

  test('debe completar un todo', () => {
    const action = {
      type: 'HECHO',
      payload: 1
    }

    let newState = todoReducer(initialState, action)
    expect(newState).toEqual([{
      ...initialState[0],
      done: true
    }])
    // should return to uncompleted
    newState = todoReducer(newState, action)
    expect(newState).toEqual([{
      ...initialState[0],
      done: false
    }])
  })
})
