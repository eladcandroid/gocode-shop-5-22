// import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import TodoContext from "../../contexts/TodoContext";
import Todo from "../Todo/Todo";
import "./Todos.css";
function Todos() {
  console.log("Todos");
  const { todos } = useContext(TodoContext);
  // useEffect(() => {
  //   console.log("todos changed");
  // }, [todos]);

  return (
    <div className="Todos">
      {todos.length > 0
        ? todos.map((todo) => (
            <Todo key={todo.id} id={todo.id} title={todo.title} />
          ))
        : "Loading... "}
    </div>
  );
}

export default Todos;
