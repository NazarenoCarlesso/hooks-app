export const TodoItem = ({ id, todo, done, toggleTodo, removeTodo }) => {
  // console.log(done)
  return (
    <li>
      <span
        className={done ? 'done' : null}
        style={{ display: 'inline-flex', width: 300 }}
      >
        {todo}
      </span>
      <button
        onClick={() => toggleTodo(id)}
        style={{
          backgroundColor: 'rgb(7 151 55)'
        }}
      >
        Hecho
      </button>
      <button
        onClick={() => removeTodo(id)}
        style={{
          backgroundColor: 'rgb(151 7 7)'
        }}
      >
        Borrar
      </button>
    </li>
  )
}
