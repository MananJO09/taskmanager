import React, { useState } from 'react'

const taskmanager = () => {
    
    const [tasks, setTasks] = useState([]);
    const [newtask, setnewtask] = useState('');
    const [edittask, setEdittask] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddTask= () => {
        if(newtask.trim() === '') return;
        setTasks([...tasks, newTask]);
        setnewtask('');
    };

    const handleEditTask= (index, task) => {
        setEditIndex(index);
        setEdittask(task);
    };

    const handleSaveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index]=  editedTask;
        setTasks(updatedTasks);
        setEdittask('');
        setEditIndex(-1);
    };

    const handleDeleteTask =(index) => {
        const updatedTasks= tasks.filter((task,i) => i!== index);
        setTasks(updatedTasks);
    };
    
}

export default taskmanager