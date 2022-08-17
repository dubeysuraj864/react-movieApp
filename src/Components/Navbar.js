import React from "react";
import "./Style/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <input type="checkbox" id="menu" name="menu" />
        <label htmlFor="menu" id="burger">
          <span className="burger1"></span>
          <span className="burger2"></span>
          <span className="burger3"></span>

        </label>
        <span className="logo-name">   <Link to="/">BingeWatch</Link> <i class="fa-solid fa-popcorn"></i></span>
       
       
        <ul class="links">
        <Link to="/Action">Action</Link>
        <Link to="/Adventure">Adventure</Link>
        <Link to="/Comedy">Comedy</Link>
        <Link to="/Horror">Horror</Link>
        <Link to="/TvShows">TV shows</Link>
        <Link to="/Sports">Sports</Link>
    <Link id="kid" to="/kids">Kids</Link>
            
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
