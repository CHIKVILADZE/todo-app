import React from 'react';
import Form from './components/form';
import styled from 'styled-components';
import {useState} from 'react';
import TodoList from './components/todolist';
import HeaderStyle from './components/header';
import './App.css'
import { createSolutionBuilderWithWatch } from 'typescript';
import { arrayBuffer } from 'node:stream/consumers';






const StyledButton = styled.button`
width:40px;
height:40px;
margin-left:${(props) => props.variant === 'inpbtn' ? '30px' : '10px'};
background:none;
 border:none;
 cursor:pointer;
`  



function App() {

  const[input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const[item,setItem]=useState(true)
  

  
  let today = new Date();

  let hours = addZero (today.getHours());
  let min = addZero (today.getMinutes())

  let  time = `${hours} : ${min}`
  function addZero (num){
    return num<10 ? `0${num}` :num
  }

  const [timeInp, setTimeInp] = useState(time)

  let date=today.getDate();

  let day:any = today.getDay()

  switch (day){
    case 0: day = "Sun";
   break;
   case 1: day = "Mon";
   break;
   case 2: day = "Tue";
   break;
   case 3: day = "Wed";
   break;
   case 4: day = "Thu";
   break;
   case 5: day = "Fri";
   break;
   case 6: day = "Sat";
   break; 

  }
  


  return (
    <>
    <div className="title"><h1>Todo</h1></div>
    <div className='cont'>

      

        <HeaderStyle 
        time={time} day={day} date={date}/>


        <div >
            
              <Form input={input} setInput={setInput}
              todos={todos} setTodos={setTodos}
              item={item} setItem={setItem}
              StyledButton={StyledButton}
              timeInp={timeInp} setTimeInp={setTimeInp}
              time={time}
              />
           

              <TodoList  todos={todos} setTodos={setTodos}
              StyledButton={StyledButton}
              hours={hours} min={min} time={time}
              timeInp={timeInp} setTimeInp={setTimeInp}
              />
        </div>
        
    </div>
    </>
  );
}

export default App;
