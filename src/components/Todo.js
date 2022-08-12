import React from "react"
import {RiCloseCircleLine} from "react-icons/ri"
import {TiTick} from "react-icons/ti"
export default function Todo({todos,completeTask,removeTask}) {
 return (
        todos.map((todo)=>(
            <div className={todo.isComplete? 'complete task-div' : 'task-div'}>
                <div className="icons">
                    <TiTick className ={todo.isComplete ? "strike":"tick"} onClick={()=>{completeTask(todo.id)}}></TiTick>
                    
                </div>
                <div className="todo-text">{todo.text}</div>
                <div className="icons">
                    
                    <RiCloseCircleLine className="cross" onClick={()=>{removeTask(todo.id)}}></RiCloseCircleLine>
                </div>
            </div>
        ))
    )
}