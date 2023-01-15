import React from 'react';

export default function Overview(props){
    const tasks = props.tasks;
    let id = 100;
    return (
    <ul>
        {tasks.map((task)=> {return <li key={id++}>{task}</li>})}
    </ul>
    );
}

