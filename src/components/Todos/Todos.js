import Todo from "../Todo/Todo";
import "./Todos.css";
function Todos({ todos, removeTodo }) {
  console.log("Todos");
  return (
    <div className="Todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
