import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import {FaRegCircle} from "react-icons/fa";
import styled from 'styled-components';



const DeleteButton=styled.button`
    width:40px;
    height:40px;
    background:none;
    border:none;
    cursor:pointer;
    
`

const ListInput = styled.input`
    padding-left:10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #0D0D0D;
    border:none;
    width:80%;
 `  

     



function TodoList ({todos, setTodos, hours, min, time, StyledButton, timeInp, setTimeInp}){

    const handleDelete =({id}) =>{
        setTodos(todos.filter((todo) =>todo.id !== id))

    }
    const handleComplete = (todo :any) =>{
        setTodos(
            todos.map((list) =>{
                if(list.id === todo.id){
                   
                    return {...list, completed: !list.completed}
                
                }
               
                return list;
                
            })
        )

    }

  

    return(
        <div className='list'>
         
            {todos.map((todo) =>(
                <li key={todo.id}>

                    <div className="box">
                        <div className='minisection'>
                            <ListInput  type="text" value={todo.title} onChange={(event) => event.preventDefault()}/>
                        <div className="paragraph"> Today at<input className="timeinput" type="text" value= {todo.timeInp}/></div> 
                        </div>   
                            
                            <StyledButton variant='inpbtn' onClick={() => handleComplete(todo)}>
                                {todo.completed ? (<FaCheckCircle size="20px" color="#20EEB0"/>): (<FaRegCircle size="20px" color="#20EEB0"/>)}</StyledButton>
                                <DeleteButton onClick={()=> handleDelete(todo)}>< FaTrashAlt size="20px" color="red"/></DeleteButton>
                    </div>
                    
                </li>
            ))}

             
                

        </div>

    )
}

export default TodoList;