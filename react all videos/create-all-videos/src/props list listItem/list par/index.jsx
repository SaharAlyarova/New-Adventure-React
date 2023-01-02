import React from 'react'

const List = ({element}) => {
  return (
    
      <tr>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.username}</td>
        <td>{element.email}</td>
      </tr>
    
  )
}

export default List
