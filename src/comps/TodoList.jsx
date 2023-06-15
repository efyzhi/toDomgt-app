const TodoList = ({ todo, handleComplete, handleDeleteTodo }) => {
  return (
    <>
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {" "}
        <div>
        <h3>Title: {todo.text}</h3>
        <p>Description:  {todo.description}</p>
        </div>
        <div>
        <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
        <button onClick={() => handleComplete(todo.id)}>
          {todo.completed ? "Incomplete" : "Complete"}
        </button>
        </div>
      </li>
    </>
  );
};

export default TodoList;
