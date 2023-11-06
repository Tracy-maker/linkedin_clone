import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>
      <div className="header_left">
      <img src="https://i.ibb.co/P51pbfT/Screenshot-2023-11-06-at-11-59-00-am.png" alt="linedIn-clone"/> 
        <div className="header_search">
          <input type="text" />
        </div>
      </div>
      <div className="header_right"></div>
    </div>
  );
}

export default Header;
