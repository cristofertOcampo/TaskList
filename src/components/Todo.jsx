import React from 'react'
import { useState } from 'react';

export const Todo = ({item}) => {


  return (
    <div>
        {item.title}
        <button>Edit</button>
        <button>Delete</button>
    </div>
    )
}
