import Task from "../../components/Task/Task";
import React from "react";
import useDataFetching from "../../hooks/useDataFetching";
 
import styled from "styled-components";

const BacklogWrapper=styled.div`
display: flex;
    flex-direction: column;
    margin: 5%;
    justify-content:center;
    
    h2{
        width: 100%;
        padding-bottom: 10px;
        text-align: center;
        border-bottom: 1px solid darkgray;
    }
    `;

const TaskWrapper=styled.div`

display: flex;
justify-content: space-between;
flex-direction: row;

flex-wrap: wrap;
margin: 5%;`;




function Backlog(){
    const [loading,error,tasks]= useDataFetching(`https://my-json-server.typicode.com/ZEAB-H/TaskDb/tasks`,);

    return (<BacklogWrapper  >
        <h2>Backlog</h2>
        <TaskWrapper >
            {loading || error ?(
                <span>{error||'Loading...'}</span>
            ): (
                tasks.map((task)=> (
                    <Task 
                    key={task.id}
                    title={task.title}
                    body={task.body}
                />
                ))
            )}
        </TaskWrapper>
    </BacklogWrapper>);

}


export default  Backlog;