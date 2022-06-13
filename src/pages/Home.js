import { useEffect, useState } from "react";
import Todos from "../components/Todos/Todos";
import TodoContext from "../contexts/TodoContext";

export default function Home() {
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodosList(todos));
  }, []);

  function removeTodo(id) {
    const newTodos = todosList.filter((todo) => todo.id !== id);
    setTodosList(newTodos);
  }

  let newTitle = "";

  function addTodo() {
    // console.log(
    //   "todosList[todosList.length - 1].id + 1",
    //   todosList[todosList.length - 1].id + 1
    // );
    setTodosList([
      ...todosList,
      {
        id: todosList[todosList.length - 1].id + 1,
        title: newTitle,
        completed: false,
      },
    ]);
  }
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // console.log("my value", shuki.target.value);
          newTitle = e.target.value;
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add todo
      </button>
      <TodoContext.Provider
        value={{ removeTodoShuki: removeTodo, todos: todosList }}
      >
        <Todos />
      </TodoContext.Provider>
    </>
  );
}
