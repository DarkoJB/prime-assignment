import React from 'react';
import Task from '../../components/Task/Task';
import Create_Task from '../../components/Create_Task/Create_Task';

const Tasks = () => {

    return (
        <>
        <h1>Tasks</h1>
        <Create_Task></Create_Task>
        <Task></Task>
        </>
    )
}

export default Tasks;