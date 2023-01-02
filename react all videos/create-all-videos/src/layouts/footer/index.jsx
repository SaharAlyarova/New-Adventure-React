import React from 'react'
import ButtonCom2 from '../../all button/button2'

const FooterCom = (props) => {
    const {req,skills}=props
    const btnclick=(el)=>{
        console.log("Hello Kamala");
      
         <h1>salam: {req}{skills}</h1>
    }
    const onchangecom=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
        <ButtonCom2  text={"footerbtn" } renk={"rengyellow"}/>
        <button onClick={()=>{btnclick()}}>Click me</button>
        <input type="text" onChange={(e)=>{onchangecom(e)}} />
        <h1>{req}</h1>
        
    </div>
  )
}

export default FooterCom