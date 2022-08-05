import React from "react";
import { RiCloseCircleLine } from 'react-icons'
import { TiTick } from 'react-icons'
export default function Todo({ todos, completedTask, removeTask })

    return todos.map((todo, index) => {
        <div>
            <div className="todo-text">{todo.text}</div>
            <div className="icons">
                <TiTick onClick={() => { completedTask(todo.id) }}></TiTick>
                <RiCloseCircleLine
        </div>    
        
    })
