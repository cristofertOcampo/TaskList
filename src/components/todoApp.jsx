import React from 'react';
import { useState } from 'react';
import Style from '../cssComponents/todoApp.module.css'

export default function TodoApp(){
    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);

    function handleClick(e){
        e.preventDefault();
        setTitle("Cristofert");
    }

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
        };
    }

    return ( 
    <div className={Style.todoContainer}>
        <form className={Style.todoCreateForm} onSubmit={handleSubmit}>
            <input onChange={handleChange} className={Style.todoInput} value={title} />
            <input onClick={handleClick} type="submit" value="Create todo" className={Style.buttonCreate} />
        
        </form>
    </div>
    );
}

