import React from 'react'
import { useState, useEffect } from 'react';
const UsersPage = () => {
  
    const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem("signin"));
  if (items) {
   setItems(items);
  }
}, []);
   
  return (
    <div className='container'>
        <div style={{marginRight:"1140px"}}><h1>My Table</h1></div>
      <table style={{marginLeft:"40px"}}>
      
        <thead>
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Country</th>
            <th>City</th>

            </tr>
        </thead>
        <tbody>

    <td> </td>
    <td> </td>
    <td></td>
    <td></td>
    
        </tbody>
           
      </table>
      <button onClick={useEffect} className='usersbtn'>Users</button>
    </div>
  )
}

export default UsersPage
