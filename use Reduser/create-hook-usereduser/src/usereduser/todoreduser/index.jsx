import React, { useReducer,useState } from 'react'
import {uid} from 'uid'
const reducerfunc=(state,action)=>{
switch (action.type) {
    case "settodo":
        return {...state,inputValue:action.peyload};
        case "addtodo":
        return {...state,todos:[...state.todos, action.peyload], inputValue:"",
    }
    case "deletetodo":
        return {...state,todos:[...state.todos.filter(q=>q.id!=action.peyload)]
    }
    default:
     return state
}}
const ToDoReduce = () => {
    const [state, dispatch] = useReducer(reducerfunc, {todos:[],inputValue:""})
  return (
    <div>
      <input type="text" value={state.inputValue} onChange={(e)=>{dispatch({type:"settodo",peyload:e.target.value})
       }}/>
      <button onClick={()=>{
dispatch({type:"addtodo",peyload:{id:uid(),inputText:state.inputValue}})
      }}>Add</button>
      {
        state.todos?.map(el=>{
            return <p key={el.id} onClick={()=>{
dispatch({type:"deletetodo",peyload:el.id})
            }}>{el.inputText}</p>
        }) 
      }
    </div>
  )
}
export default ToDoReduce
