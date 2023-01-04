import React from 'react'
import { NavLink } from 'react-router-dom'
import '../header/index.scss'
const HeaderCom = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
        <div><h1>The Blog Website</h1></div>
        <div>
        <ul style={{display:"flex", columnGap:"15px", rowGap:"10px",textDecoration:"none",listStyle:"none"}}>
       
       <li>
        {" "}
         <NavLink to={"/homecom"}>Home</NavLink>
       </li>
       <li>
         <NavLink to={"/blogcom"}>New Blog</NavLink>
       </li>
     
     </ul>
     
        </div>
     {/* <div className='defaultname'></div> */}
    </div>
  )
}

export default HeaderCom
