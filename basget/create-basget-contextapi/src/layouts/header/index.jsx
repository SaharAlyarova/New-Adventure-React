import React from "react";
import { NavLink } from "react-router-dom";
import "./headerStyle.scss";
const Header = () => {
  return (
    <div>
      <header style={{ backgroundColor: "black",display:"flex",justifyContent:"space-between",alignItems:"center" }}>
     
      <div> <h3 style={{color:"white"}}>Products</h3></div>
     
     
      <div style={{display:"flex",columnGap:"15px"}}>
      <ul style={{textDecaration:"none", listStyle:"none", columnGap:"15px",color:"white",display:"flex",justifyContent:"center",alignItems:"center" }}>
        <li>
          <NavLink to={"/productslist"}>Products List</NavLink>
        </li>
        <li>
          <NavLink to={"/productsinbasget"}>Products in basget</NavLink>
        </li>
      <li>
        <NavLink to={"/productslist:id"}/>
      </li>
      </ul>
      </div>
      </header>
    </div>
  );
};

export default Header;
