import './Task.css';
import React from 'react';


function Task({id,onDragStart,title,body}){
    return(
        <div className='Task-wrapper'
        draggable
        onDragStart={(e)=> onDragStart(e,id)}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Task;