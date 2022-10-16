import './Lane.css';
import React from 'react';
import Task from '../Task/Task';

function Lane({ title,laneId,onDrop,loading,error,tasks ,onDragStart, onDragOver}) {
  return (
    <div className='Lane-wrapper'
    onDragOver={onDragOver}
    onDrop={(e) => onDrop(e, laneId)}>
      <h2>{title}</h2>
      {
        loading || error?(
          <span>{error||'Loading...'}</span>
        ) :(
          tasks.map((task) =>(
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              laneId={task.laneId}
              body={task.body}
              onDragStart={onDragStart}
              onDrop={onDrop}
             />
          ))
        )
      }
    </div>
  );
}

export default Lane;
