import { useState } from "react";
import "./index.css";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function clearAllTasks() {
        setTasks([]);
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            {tasks.length > 0 && <button className="clear-button" onClick={clearAllTasks}>Clear All</button>}
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className="task-box">
                        <span className="text">{task}</span>
                        <div className="button-container">
                            <button onClick={() => moveTaskUp(index)}>↑</button>
                            <button onClick={() => moveTaskDown(index)}>↓</button>
                            <button onClick={() => deleteTask(index)}>X</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
