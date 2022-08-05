import React, { useState } from 'react'



export default function TodoForm(props) {
    //state
    const { input, setInput } = useState(" ");//keeps track of user input

    //user-defined :all the letters or the words have to get updated constantly when the user is typing
    const handleChange = e => {
        setInput(e.target.value)
    }



    //user-defined function:to handle the change or the inputs on submission
    const handleSubmit = (e) => {
        //prevent reload of todo tasks on button click:
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000),
            text: input,
            // handled by todolist.js component by function isCompleted
            isComplete: false

        });
        //setinput to empty string
        setInput('');

    }


    return (<form>
        <input type="text" placeholder='Add a TODO' onChange={handleChange} className="todo-input" value={input} name="text" />
        {/* the className is used to handle css of the button */}
        <button type="submit" onClick={handleSubmit} className="todo-btn">Add TODO</button>
    </form>);
}

