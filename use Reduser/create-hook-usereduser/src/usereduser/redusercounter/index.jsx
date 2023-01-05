import React, { useReducer } from 'react'
// const INCREMENT="INCREMENT"
// const DECREMENT="DECREMENT"
const actions={
     INCREMENT:"INCREMENT",
     DECREMENT:"DECREMENT", 
     INCREMENTBY:"INCREMENTBY",
     SET_INPUT_VALUE:"SET_INPUT_VALUE",
     INCREMENT_BY_INPUT: "INCREMENT_BY_INPUT",
}
const reducer=(state,action)=>{
switch (action.type) {
    case actions.INCREMENT:
        return {...state, count:state.count+1}
       case actions.DECREMENT:
        return{...state, count:state.count-1}
        case actions.INCREMENTBY:
          return{ count:state.count + action.peyload}
          case actions.SET_INPUT_VALUE:
            return{ ...state,inputValue:action.peyload}
            case actions.INCREMENT_BY_INPUT:
              return { ...state, count: state.count + +action.peyload };

    default:
        return state()
}}
const ReduserCounter = () => {
    const handleIncrement=()=>{
dispatch({type:"INCREMENT"})
    }
    const handleDecrement=()=>{
        dispatch({type:"DECREMENT"})
    }

    const handledecrementcount=()=>{
      dispatch({type:"INCREMENTBY", peyload:3})
    }
    const handleByInputValue = () => {
      dispatch({ type: "INCREMENT_BY_INPUT", peyload: state.inputValue });
    };
    const [state, dispatch] = useReducer(reducer, {count:0, inputValue:''})//initialstate {count:0} 
    //kimi basa duse bilerik yeni state'lerin baslangic deyerini ozunde saxlayir
  return (
    <div>
      <button onClick={()=>{
        handleIncrement()
      }}>Inc</button>
      {state.count}
      <button  onClick={()=>{
        handleDecrement()
      }}>Dec</button>
<input type="text"  onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", peyload: e.target.value })
        }/>
<button 
onClick={handleByInputValue}
>Increment By Input Value</button>
      <button onClick={()=>{
        handledecrementcount()
      }}>Increment by</button>
    </div>
  )
}
export default ReduserCounter

