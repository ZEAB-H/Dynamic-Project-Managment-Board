                                   
import React from 'react';
import styled from 'styled-components';

const TaskWrapper= styled.div`
    background:white;
    padding:20px;
    border-radius:20px;
    margin:0% 5% 5% 5%;

    h3{
        width: 100%;
        margin:0;
    }
    p{
        color:darkgreen;
    }
`;

function Task({id, title, body, onDragStart }){
    return(
        <TaskWrapper
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      <h2>{title}</h2>
      <p>{body}</p>
    </TaskWrapper>
    );
}

export default Task;