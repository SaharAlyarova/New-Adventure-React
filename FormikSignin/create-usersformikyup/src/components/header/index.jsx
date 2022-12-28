import React from 'react'
import { NavLink } from 'react-router-dom'
import "../header/index.scss"
const HeaderCom = () => {
  return (
    <div style={{display:"flex"}} className='container'>
      <nav>
        <NavLink to={"/login"}> <button id="" className='loginbtn' style={{marginRight:"10px",marginLeft:"10px"}}>Login in</button></NavLink>
        <NavLink to={"/signin"}><button className='signinbtn'>Sign in</button></NavLink>
        <NavLink to={"/users"}><button className='usersbtn' style={{marginLeft:"10px"}}>Users</button></NavLink>
      </nav>
    </div>
  )
}

export default HeaderCom
