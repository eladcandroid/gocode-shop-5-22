// import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import Counter from "./components/Counter";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";
function App() {
  return (
    <div className="App">
      {/* <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br /> */}
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:todoId" element={<TodoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
