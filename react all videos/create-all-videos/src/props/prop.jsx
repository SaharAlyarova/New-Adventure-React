import React from 'react'

const PropCom = (props) => {
    const {skills, sayHi, userName}=props
    console.log(skills);
  return (
    <div>
      <h1>{skills}</h1>
     <ul>
        {
            skills.map((element,index,arr)=>{
               return <li key={index}> {index}-{element}</li>
            })
        }
        {/* {sayHi()} */}
        <button onClick={()=> sayHi(userName)}>click</button>
     </ul>
    </div>
  )
}

export default PropCom
