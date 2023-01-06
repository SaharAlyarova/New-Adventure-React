import React from 'react'
import { useState } from 'react'
import {users} from 'react'

const YoxlaBakemGorek = () => {
    const [datas,setdatas]=useState()
    const handleDelete=(e)=>{
let deldata= datas.filter((elem)=>elem.id != e.target.parentElement.parentElement.id)


setdatas(deldata)

    }
let local= JSON.parse(localStorage.getItem("users")) || []
const handleLocalStorage=(el)=>{
datas.forEach(element => {
if(el.id==element.target.parentElement.parentElement.id){
    let userObj={
id:element.id,
name:element.name,
username:element.username,
email:element.email
    }
    localStorage.setItem("users", JSON.stringify(local))
}

});
}





  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Add</th>
            </tr>
        </thead>
        <tbody>
            {
datas.map((element)=>{
    return(
        <tr>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.surname}</td>
            <td>{element.email}</td>
            <button onClick={(e)=>{
                handleDelete(e)
            }}>Delete</button>
            <button onClick={(el)=>{
                handleLocalStorage(el)
            }}>Add</button>
        </tr>
    )
})
            }
        </tbody>
      </table>
    </div>
  )
}

export default YoxlaBakemGorek
