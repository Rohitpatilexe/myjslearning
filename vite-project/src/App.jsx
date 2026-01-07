import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NameInput(){
  const[name,setName]=useState("");
  const[count,setCount]=useState(0);
  function onClickHandeler(){
    setCount(count+1);
  }
  return(
    <div>
    <h1>Name Input</h1>
    <input 
    value={name}
    onChange={function(e){
    setName(e.target.value)
    }}/>
    <p>Your Name:{name}</p>
    <button onClick={onClickHandeler}>Counter {count}</button>
    </div>
  );
  
  
}  

export default NameInput;

//here count is a state variable
//we define setcount as a function which triggers after some change is done to the state variable
//to render a dynamic javascript variable inside component use {func_name.variable}

//if u want to design a state variable import {useState} hook
//const [count,setCount] =useState(0);
