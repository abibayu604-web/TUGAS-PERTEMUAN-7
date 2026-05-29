import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Beli Telur",
    "Beli Beras",
    "Beli Sayuran",
  ]);

  const [input, setInput] = useState("");

  // Tambah Todo
  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  // Hapus Todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todos</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
      </div>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <div className="left">
              <input type="checkbox" />
              <span>{todo}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(index)}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;