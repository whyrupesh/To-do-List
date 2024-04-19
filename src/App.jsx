import React, { useState } from 'react'
import './App.css';



export default function App() {

  const [todo ,settodo] = useState('');
  const [works ,setworks] = useState([]);

  function addwork(todo){
      setworks([...works, todo]);
  }

  const handleSubmit = (e) =>{
    // e.preventDefault();
    addwork(todo);
    settodo("");
    console.log(todo);

  }
  const handleDelete = (index) => {
    const updatedWorks = works.filter((_, i) => i !== index);
    setworks(updatedWorks);
  };
  


  return (
    <div>
      <h1>To-Do-List App</h1>

      <input value={todo} onChange={(e)=>settodo(e.target.value)} ></input>
      <button onClick={handleSubmit}>Add</button>

      {/* list of todo */}

      {works.map((todo,index)=>(<p key={index}>{todo}<button onClick={() => handleDelete(index)}>delete</button></p> ))}
      
    </div>
  )
}
