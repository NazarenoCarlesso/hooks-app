import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul style={{ minWidth: 500, flexGrow: 1 }}>
      {
        todos.map(({ id, todo, done }) => (
          <TodoItem
            key={id}
            id={id}
            todo={todo}
            done={done}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
      }
    </ul>
  )
}
