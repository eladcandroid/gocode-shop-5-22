import { useContext } from "react";
import TodoContext from "../../contexts/TodoContext";

function Todo({ id, title }) {
  const { removeTodoShuki } = useContext(TodoContext);

  return (
    <div>
      {title}
      <button onClick={() => removeTodoShuki(id)}>Remove</button>
    </div>
  );
}

export default Todo;
