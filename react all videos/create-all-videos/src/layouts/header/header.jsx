import React from "react";
import Button from "../../all button/button/button";
import ButtonCom2 from "../../all button/button2";
import './index.scss'
const Header = (props) => {
  console.log(props);
  const { req, group } = props; // h1 ve p teqi daxilinde props.group, props.req yazmamaq ucun burada distracted etdik
   
  return (
    <div>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>

      {/* <Button text={"button"}/> */}
      <ButtonCom2 text={"headerbtn"} renk={"renkred"}/>
      <h1>{req}</h1>
      <p>{group}</p>
 
    </div>
  );
};

export default Header;
