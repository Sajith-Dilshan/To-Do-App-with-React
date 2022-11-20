import React, { useState } from 'react'
import './TodoInput.css'
import { PlusIcon } from "@heroicons/react/outline";

function TodoInput({todos, setTodos}) {

  const [todo, setTodo] = useState("");

  const handleClick = () => {
    const newTodo = {
      id : 1,
      name: todo,
      isCompleted: false,
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  }

  return (
    <div>
      <input 
      type="text" 
      value={todo} 
      onChange={(event) => {
           setTodo(event.target.value)
      }}
      placeholder="Enter you todo..."
      />


<button onClick={handleClick}>
  <PlusIcon style={{width: "15px", height: "15px"}} />
</button>



    </div>
  )
}

export default TodoInput
