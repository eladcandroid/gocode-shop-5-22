function Todo({ id, title, removeTodo }) {
  console.log("Todo render");
  return (
    <div>
      {title}
      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  );
}

export default Todo;
