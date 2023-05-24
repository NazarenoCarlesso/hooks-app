import { useEffect, useReducer } from 'react'
import gemasMock from '../mocks/gemas'
import { todoReducer } from '../reducers/todoReducer'

const useTodos = () => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem('todos')).length
      ? JSON.parse(localStorage.getItem('todos'))
      : gemasMock
  )
  console.log(todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()

    const { value } = e.target[0]

    dispatch({
      type: 'AGREGAR',
      payload: {
        id: new Date().getTime(),
        todo: value,
        done: false
      }
    })

    e.target[0].value = ''
  }

  const removeTodo = (id) => {
    dispatch({
      type: 'BORRAR',
      payload: id
    })
  }

  const toggleTodo = (id) => {
    dispatch({
      type: 'HECHO',
      payload: id
    })
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }
}

export default useTodos
