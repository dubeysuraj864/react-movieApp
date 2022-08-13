import React from "react";
import "./Style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <input type="checkbox" id="menu" name="menu" />
        <label htmlFor="menu" id="burger">
          x
        </label>
        <span className="logo-name"> BingeWatch <i class="fa-solid fa-popcorn"></i></span>
       
       
        <ul class="links">
          <a href="/" target="_blank">
            TV
          </a>
          <a href="/" target="_blank">
            Movies
          </a>
          <a href="/" target="_blank">
            Sports
          </a>
          <a href="/" target="_blank">
            News
          </a>
          <a href="/" target="_blank">
            Premium
          </a>
          <a href="/" target="_blank">
            Watch+
          </a>
          <a href="/" id="kid" target="_blank">
            Kids
          </a>
          <div className="search-bar ">
            <input
              type="text"
              className="mobile-search"
              placeholder="Light Year"
            /><i class=" mobile-search fa-solid fa-magnifying-glass"></i>
          </div>
        </ul>
      </div>
   
      <div className="search-bar">
        <input type="text" className="desktop-search" placeholder="Family Guy" /><i class=" desktop-search fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="login-subs">
        <a href="/" className="subscribe login">
          Login
        </a>

        <a href="/" className="subscribe">
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default Navbar;
