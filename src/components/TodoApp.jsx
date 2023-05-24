import useTodos from '../hooks/useTodos'
import { TodoList } from './TodoList'

export const TodoApp = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
  // console.log(todos)

  return (
    <>
      <h1>Todo App ({todos.length}) | <small>Pendientes: ({todos.filter(t => !t.done).length})</small></h1>
      <hr />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row' }}>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h1>Agregar Todo</h1>
          <form onSubmit={addTodo}>
            <input
              type='text'
              placeholder='¿Qué hay que hacer?'
            />
            <button type='submit' style={{ width: 201 }}>
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
