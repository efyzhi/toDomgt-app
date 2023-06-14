import { useEffect, useState } from "react";
import TodoInputForm from "./comps/TodoInputForm";
import Todolist from "./comps/TodoList";
import "./styles.css";

function App() {
  const retiveTodos = () => {
    const getStoredTodos = localStorage.getItem("todos");
    if (getStoredTodos) {
      return JSON.parse(getStoredTodos);
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState(retiveTodos);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (input !== "" && title !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: input,
          description: title,
          completed: false
        }
      ]);
    }
    setInput("");
    setTitle("");
  };

  const handleDeleteTodo = (id) => {
    const deleteTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deleteTodo);
  };

  const handleComplete = (id) => {
    const completedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    setTodos(completedTodos);
  };
  return (
    <>
      <h1>Todo App</h1>
      <TodoInputForm
        handleAddTodo={handleAddTodo}
        handleInput={handleInput}
        handleTitle={handleTitle}
        todos={todos}
        input={input}
        title={title}
      />

      <ul>
        {todos.map((todo) => (
          <Todolist
            todo={todo}
            key={todo.id}
            handleComplete={handleComplete}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
