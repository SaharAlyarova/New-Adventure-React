// import React, { useEffect } from "react";
import { users } from "./user";
// import "./index.scss";
import { useState } from "react";


const FormKom = () => {
  const [usersData, setUsersData] = useState(users);
 

  // delete 
  const handleDelete = (e) => {
    let updateUsers = usersData.filter(
      (elem) => elem.id != e.target.parentElement.parentElement.id
    );
    setUsersData(updateUsers);
  };

  let arrayUsers = JSON.parse(localStorage.getItem("users")) || [];
  //  add localstorage
  const addLocalStorages = (e) => {
    usersData.forEach((el) => {
      if (el.id == e.target.parentElement.parentElement.id) {
        let usersObj = {
          id: el.id,
          name: el.name,
          email: el.email,
        };
        arrayUsers.push(usersObj);
        localStorage.setItem("users", JSON.stringify(arrayUsers));
      }
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((element, i) => {
            return (
              <tr id={element.id} key={i}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>
                  <button style={{color:"white", background:"red", border:"0"}}
                    className="deleteBtn"
                    onClick={(e) => handleDelete(e)}
                  >
                    Delete
                  </button>
                </td>
                <td></td>
                <td>
                  <button  style={{color:"white", background:"blue", border:"0"}}
                    className="addBtn"
                    onClick={(e) => addLocalStorages(e)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormKom;
