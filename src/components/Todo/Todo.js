import { useContext } from "react";
import { Link } from "react-router-dom";
import TodoContext from "../../contexts/TodoContext";

function Todo({ id, title }) {
  const { removeTodoShuki } = useContext(TodoContext);

  return (
    <div>
      <Link to={`/todos/${id}`}>{title}</Link>
      <button onClick={() => removeTodoShuki(id)}>Remove</button>
    </div>
  );
}

export default Todo;
