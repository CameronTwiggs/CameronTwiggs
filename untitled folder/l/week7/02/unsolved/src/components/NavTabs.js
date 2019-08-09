import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          className={"nav-link"}                
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          className={"nav-link"}         
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"  
          className={"nav-link"}              
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact" 
          className={"nav-link"}      
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;