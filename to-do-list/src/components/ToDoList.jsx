import React, { useState } from 'react';
import '../Style/todoList.css'

function ToDoList() {
    const [toDoList, setToDoList] = useState([]);
    const [task, setTask] = useState('');
   

    const addTask = () => {
        const task1 = {
            taskName:task,
            completed:false
        }
        setToDoList([...toDoList, task1]);
        setTask('')
        
    };

    const deleteTask = (id) => {
        setToDoList(toDoList.filter((_, index) => index !== id));
    };

    const toggleCompleted = (id) => {
        setToDoList(
            toDoList.map((task, index) =>
                index === id ? { ...task, completed: !task.completed } : task
            )
        );
    };


    return (
        <div className="container">
            <div className="addList">
                <input
                    type="text"
                    className="taskInput"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter task..."
                />
                <button className="addButton" onClick={addTask}>
                    Add Task
                </button>
            </div>
            <div className="listView" >
                {toDoList.map((task, index) => (
                    <div className="task" key={index} style={{backgroundColor:task.completed?'green':'red'}}>
                        <h4>{task.taskName}</h4>
                        <button className='done' onClick={()=>toggleCompleted(index)}>O</button>
                        <button onClick={() => deleteTask(index)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
