import React from 'react'
import { uid } from 'uid'
import { useState } from 'react'

const TodoApp = () => {
    const [inputValue, setInputValue]=useState("")
    const [todos, settodos] = useState([])
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e)=>{
         
        setInputValue(e.target.value)
    
      }}/>
      <button onClick={()=>{
        settodos([...todos, {id: uid(), todoText:inputValue}])
        setInputValue("") }}>Add</button>
{
          todos.map((el)=>{
            return <p key={el.id} onClick={(e)=>{  settodos([...todos.filter(e=>
e.id!=el.id
            )])}}>{el.todoText}</p>
          
          })
}
    </div>
  )
}

export default TodoApp
