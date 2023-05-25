import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../components/TodoItem'

describe('Pruebas en el <TodoItem />... ', () => {
  const todo = {
    id: 1,
    todo: 'Piedra del alma',
    done: false
  }

  const toggleTodoMock = jest.fn()
  const removeTodoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('debe de mostar el componente por defecto', () => {
    render(
      <TodoItem
        {...todo}
        toggleTodo={toggleTodoMock}
        removeTodo={removeTodoMock}
      />
    )
    // screen.debug()

    expect(screen.getByText(todo.todo))
    expect(screen.getByText('Hecho'))
    expect(screen.getByText('Borrar'))
  })

  test('debe de mostrar el todo completado', () => {
    todo.done = true

    render(
      <TodoItem
        {...todo}
        toggleTodo={toggleTodoMock}
        removeTodo={removeTodoMock}
      />
    )
    // screen.debug()
    const span = screen.getByText(todo.todo)
    expect(span.className).toBe('done')
  })

  test('debe completarse con boton Hecho', () => {
    render(
      <TodoItem
        {...todo}
        toggleTodo={toggleTodoMock}
        removeTodo={removeTodoMock}
      />
    )

    const button = screen.getByRole('button', { name: 'Hecho' })
    fireEvent.click(button)
    expect(toggleTodoMock).toHaveBeenCalled()
    expect(toggleTodoMock).toHaveBeenCalledTimes(1)
  })

  test('debe borrarse con boton Borrar', () => {
    render(
      <TodoItem
        {...todo}
        toggleTodo={toggleTodoMock}
        removeTodo={removeTodoMock}
      />
    )

    const button = screen.getByRole('button', { name: 'Borrar' })
    fireEvent.click(button)
    expect(removeTodoMock).toHaveBeenCalled()
    expect(removeTodoMock).toHaveBeenCalledTimes(1)
    expect(removeTodoMock).toHaveBeenCalledWith(1)
    // screen.debug()
  })
})
