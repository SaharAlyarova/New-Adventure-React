import React from 'react'
import List from '../list par'
import {uid} from 'react-uid';
const ListItemCom = ({Obj}) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
              <th>Id</th>
               <th>Name</th>
               <th>Age</th>
               <th>SurName</th>
               <th>Country</th> 
            </tr>
        </thead>
        <tbody>
            {
                Obj.map((index,element,arr)=>{
return <List key={uid(element)} element={element}/>
                })

                }
            
        </tbody>
      </table>
    </div>
  )
}

export default ListItemCom
