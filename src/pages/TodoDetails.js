import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TodoDetails() {
  const { todoId } = useParams();

  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((todo) => setTodo(todo));
  });

  return (
    <div>
      DETAILS <br /> {todo.title}
    </div>
  );
}
