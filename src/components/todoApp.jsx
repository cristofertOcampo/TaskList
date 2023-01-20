import React from 'react';
import { useState } from 'react';
import Style from '../cssComponents/todoApp.module.css'

export default function TodoApp(){
    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);

    function handleChange(event){
        const value = event.target.value;
        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(), // Genera una id aleatoria
            title: title,
            compleated: false
        }
        const oldTodos = [...todos]; //Copia    
        oldTodos.unshift(newTodo);

        setTodos(oldTodos);
    }

    return ( 
    <div className={Style.todoContainer}>
        <form className={Style.todoCreateForm} onSubmit={handleSubmit}>
            <input onChange={handleChange} className={Style.todoInput} value={title} />
            <input onClick={handleSubmit} type="submit" value="Create todo" className={Style.buttonCreate} />
        </form>

        <div className={Style.todosContainer}>
            {todos.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
        </div>
    </div>
    );
}