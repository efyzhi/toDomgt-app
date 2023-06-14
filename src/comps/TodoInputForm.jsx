const TodoInputForm = ({
  handleAddTodo,
  handleInput,
  handleTitle,
  todos,
  input,
  title
}) => {
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">
          Title:
          <input
            placeholder="add todo title..."
            required
            value={input}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            placeholder="add todo description..."
            required
            value={title}
            onChange={handleTitle}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default TodoInputForm;
