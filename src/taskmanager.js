import React, { useState } from 'react'

const Taskmanager = () => {

    const [tasks, setTasks] = useState([]);
    const [newtask, setnewtask] = useState('');
    const [edittask, setEdittask] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddTask = () => {
        if (newtask.trim() === '') return;
        setTasks([...tasks, newtask]);
        setnewtask('');
    };

    const handleEditTask = (index, task) => {
        setEditIndex(index);
        setEdittask(task);
    };

    const handleSaveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = edittask;
        setTasks(updatedTasks);
        setEdittask('');
        setEditIndex(-1);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type='text'
                value={newtask}
                onChange={(e) => setnewtask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={edittask}
                                onChange={(e) => setEdittask(e.target.value)}
                            />
                        ) : (
                            <span>{task}</span>
                        )}
                        {editIndex === index ? (
                            <button onClick={() => handleSaveTask(index)}>Save</button>
                        ) : (
                            <>
                                <button onClick={() => handleEditTask(index, task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default Taskmanager