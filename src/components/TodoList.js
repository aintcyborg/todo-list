import React from 'react'
import { useState } from 'react';
import TodoForm from './TodoForm';



export default function TodoList() {

//state array that holds all todos returned by the form :
const[todos,setTodos]=useState([]);


const addTask=task=>{
    //if no words are entered i.e, theres no task given ..but then btn is clicked.
    if(!task.text){
        return
    }
    //to insert or push tasks:
//     const oldTask=todos;
//     todos.push(task);  is written as:
        const newTodos=[task,...todos];
        setTodos(newTodos);
}

//remove todo list:
const removeTask=id=>{
    //using destrutor get all todos and filter them
    let updatedTasks=[...todos].filter(task=>task.id!=id)
    setTodos(updatedTask)
}
//task is completef:
const completedTask=id=>{
    let updatedTasks=todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete=true
        }return todo;
    })
    setTodos(updatedTasksCompletion)
}

    return <div>
        {/* returning addTask fucn as props to the todo form */}
        <Todo todos={todos} completedTask={completedTask} removeTask={removeTask}></Todo>
        <TodoForm addTask={addTask}></TodoForm>
    </div>
}
