import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../components/TodoApp'
import useTodos from '../../hooks/useTodos'

jest.mock('../../hooks/useTodos')

describe('pruebas en <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, todo: 'Todo #1', done: false },
      { id: 2, todo: 'Todo #2', done: false },
      { id: 3, todo: 'Todo #3', done: true }
    ],
    addTodo: jest.fn()
  })

  beforeEach(() => jest.clearAllMocks())

  test('debe mostrar el componente correctamente', () => {
    render(<TodoApp />)
    screen.debug()
    expect(screen.getByText('Todo #1')).toBeTruthy()
    expect(screen.getByText('Todo #2')).toBeTruthy()
    expect(screen.getByText('Todo #3')).toBeTruthy()
    expect(screen.getByText('Agregar Todo')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
