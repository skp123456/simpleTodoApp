import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodoItem} = props
  const {title, id} = todoDetails

  const onDeleteTodo = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="todo-item-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
