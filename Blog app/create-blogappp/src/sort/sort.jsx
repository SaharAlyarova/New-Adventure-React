import React from 'react'

const SortCom = () => {
let array=[
    {id:4, name:'Dean', country:'Denmark'},
    {id:3, name:'Carl', country:'Canada'},
    {id:2, name:'Bob', country:'Belgium'},
    {id:1, name:'Ethan', country:'Egypt'},
]
console.log(array)
const numbersort=[...array].sort((a,b)=>(a.id-b.id))

console.log("numbersort array",numbersort)


const strsort=[...array].sort((a,b)=>(a.country>b.country ? 1 : -1))
console.log("strsort",strsort)
  return (
    <div>
      
    </div>
  )
}

export default SortCom
