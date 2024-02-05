import React from "react";
import "../navbar.css";
import Logo from "./Logo";

function NavBar() {
  return (
    <>
    <nav class="navbar">
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Projects</li>
        </a>
        <div class="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search                   🔍"
          />
        </div>
      </ul>
    </nav>
    
    <div>
      <Logo />
    </div>
    </>
  );
}

export default NavBar;
