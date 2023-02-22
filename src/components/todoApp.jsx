import React from "react";
import { useState } from "react";
import { Todo } from "./Todo";
import Style from "../cssComponents/todoApp.module.css";

export default function TodoApp() {
  const [title, setTitle] = useState("Take a shower");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(), // Genera una id aleatoria
      title: title,
      compleated: false,
    };
    const oldTodos = [...todos]; //Copia
    oldTodos.unshift(newTodo);

    setTodos(oldTodos);
    setTitle("");
  }

  const handleUpdate = (id, value) => {
    const oldTodos = [...todos]; //Copia
    const item = oldTodos.find((item) => item.id === id);
    item.title = value;
    setTodos(oldTodos);
  };

  const handleDelete = (id) => {
    const oldTodos = todos.filter((item) => item.id !== id);
    setTodos(oldTodos);
  };

  return (
    <div className={Style.todoContainer}>
      <form className={Style.todoCreateForm} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className={Style.todoInput}
          value={title}
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className={Style.buttonCreate}
        />
      </form>

      <div className={Style.todosContainer}>
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
