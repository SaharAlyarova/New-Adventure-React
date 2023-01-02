import React from 'react'

const ButtonCom2 = ({text, renk}) => {
    console.log(renk);
  return (
    <div>
<button className={renk}>
{text}
</button>
        
        </div>
  )
}

export default ButtonCom2