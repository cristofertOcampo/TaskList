import React from "react";
import { useState } from "react";

export const Todo = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    return (
      <form className="todoUpdateForm">
        <input type="text" />
        <button>Update</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};
