import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const handleTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const eart = ["asdasd", "drink", "smoking"];

  const addTodo = () => {
    event.preventDefault();
    let newTodo = [...todo];
    newTodo.push(todoText);
    setTodo(newTodo);
  };

  const deleteTodo = (index) => {
    let newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <>
      <h1>To do list</h1>
      <ul>
        {todo.map((item, index) => (
          <>
            <li>{item}</li>
            <button onClick={() => deleteTodo(index)}>x</button>
          </>
        ))}
      </ul>
      <form>
        <input type="text" value={todoText} onChange={handleTextChange}></input>
        <button onClick={addTodo}>Add List</button>
      </form>
    </>
  );
}

export default App;
