import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="where-in-the-world">
         <h1>Where in the world?</h1>
        </div>
        <div className="dark-mode">
        <div><i class="fa-regular fa-moon"></i></div>
          <div><h3>Dark Mode</h3></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
