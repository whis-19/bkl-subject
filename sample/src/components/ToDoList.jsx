import React from 'react';
import { useState } from 'react';

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Go to the gym", "Take a shower"]);
    const [newTask, setNewTask] = useState("");


    function handleInput(e) {
        setNewTask(e.target.value);
        console.log(newTask);
    }

    function handleAddTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function handleDeleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleMoveUp(index){
        if (index > 0) {
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = temp;
            setTasks(newTasks);
        }
    }

    function handleMoveDown(index){
        if (index < tasks.length - 1) {
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            setTasks(newTasks);
        }
    }

    return(
        <>
            <h1>To-Do-List</h1>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInput} />
            <button onClick={handleAddTask}>Add</button>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button onClick={() => handleMoveUp(index)}>Move Up</button>
                        <button onClick={() => handleMoveDown(index)}>Move Down</button>
                    </li>
                )}
            </ol>

        </>
    )
}