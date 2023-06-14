const TodoList = ({ todo, handleComplete, handleDeleteTodo }) => {
  return (
    <>
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {" "}
        <h3>{todo.text}</h3>
        <p>{todo.description}</p>
        <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
        <button onClick={() => handleComplete(todo.id)}>
          {todo.completed ? "Incomplete" : "Complete"}
        </button>
      </li>
    </>
  );
};

export default TodoList;
