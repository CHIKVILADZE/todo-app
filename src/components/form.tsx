import React from "react";
import {v4 as uuidv4} from "uuid";
import {FaCheckCircle} from "react-icons/fa";
import {FaRegCircle} from "react-icons/fa";
import styled from 'styled-components';


const StyledForm = styled.form`
    width:275px;
    height:49px;
    background-color:#EBEFF2;
    border-radius:5px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top:23px;
    
`

const StyledInput = styled.input`
    padding-left:10px;
    width:80%;
    height:45px;
    border:1px solid red;
    background-color:  #EBEFF2;
    margin-left:0;
    border:none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #0D0D0D;
 `   

 const StyledButton2 = styled.button`
    width:88px;
    height:49px;
    border-radius:5px;
    background-color:#20EEB0;
    color:white;
    font-size:32px;
    border:none;
    margin-left:10px;
    margin-top:23px;
    cursor:pointer;
 `
   
    





function Form ({input, setInput, todos,setTodos, item, time, setItem, StyledButton, timeInp, setTimeInp}) { 

    const onInputChange = (event) =>{
        setInput(event.target.value)

    }


    const handleClick =(event) =>{
        event.preventDefault()
        setTimeInp(time)
        setTodos([...todos,{id:uuidv4(), title:input, completed:!item, timeInp}])
        setInput("")
        
        

    }

    const handleChange=(event)=>{
        event.preventDefault()
        setItem(!item)
    }

    return(
        <div className="section">
           
            <StyledForm >
                <StyledButton  onClick={handleChange}> {!item === true ? <FaCheckCircle size="20px" color="#20EEB0"/> : <FaRegCircle size="20px" color="#20EEB0"/>}</StyledButton >
                <StyledInput type="text"  placeholder="Note" value={input} onChange={onInputChange}/>
            </StyledForm>
            <StyledButton2 type="submit" onClick={handleClick}>+</StyledButton2>
         
                
           
        </div>
    )
}

export default Form;