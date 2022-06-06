import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";

function App() {
  console.log("App");
  const [todosList, setTodosList] = useState([
    {
      id: 1,
      title: "Wash the dishes",
      completed: false,
    },
    {
      id: 2,
      title: "Do H.W",
      completed: false,
    },
    {
      id: 3,
      title: "Walk the dog",
      completed: false,
    },
  ]);

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
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          // console.log("my value", shuki.target.value);
          newTitle = e.target.value;
          console.log("newTitle", newTitle);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add todo
      </button>
      <Todos todos={todosList} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
