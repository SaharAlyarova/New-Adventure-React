import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
      <button onClick={()=>{
        setcount(count+1)
      }}>Inc</button>
      <p>{count}</p>
      <button onClick={()=>{
        setcount(count-1)
      }}>Dec</button>
    </div>
  )
}
export default Counter
