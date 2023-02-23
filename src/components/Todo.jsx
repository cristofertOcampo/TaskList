import React from "react";
import { useState } from "react";
import Style from '../cssComponents/todo.module.css';

export const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = (e) => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className={Style.todoUpdateForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={Style.todoInput}
          onChange={handleChange}
          value={newValue}
        />
        <button className={Style.button} onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className={Style.todoInfo}>
        <span className={Style.todoTitle}>{item.title}</span>
        <button className={Style.button} onClick={() => setIsEdit(true)}>Edit</button>
        <button className={Style.buttonDelete} onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  };

  return <div className={Style.todo}>{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};
