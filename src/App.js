import { useEffect, useRef, useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import ShowTextButton from "./components/ShowTextButton";
import Todos from "./components/Todos/Todos";
import TodoContext from "./contexts/TodoContext";
function App() {
  console.log("App");

  const shukiRef = useRef(0);
  // let shukiRef = 0;

  console.log("input", shukiRef);
  // const [count, setCount] = useState(10);

  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodosList(todos));
  }, []);

  useEffect(() => {
    shukiRef.current++;
    // shukiRef++;
    console.log("shukiRef", shukiRef);
    // inputRef.current.focus();
  }, [todosList]);

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
      {/* <Counter /> */}
      {/* <ShowTextButton /> */}
      {/* ref={inputRef} */}
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
    </div>
  );
}

export default App;
