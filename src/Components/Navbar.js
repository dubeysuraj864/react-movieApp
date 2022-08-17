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
        {/* <Link to="/" className="home-route">Home</Link>
        <Link to="/Action" className="action-route">Action</Link>
        <Link to="/Adventure" className="adventure-route">Adventure</Link>
        <Link to="/Comedy" className="comedy-route">Comedy</Link>
        <Link to="/Horror" className="horror-route">Horror</Link>
        <Link to="/TvShows" className="tvshows-route">TV shows</Link>
        <Link to="/Sports" className="sports-route">Sports</Link>
    <Link id="kid" to="/kids" className="kids-route">Kids</Link> */}
            
          <div className="search-bar ">
            <input
              type="text"
              className="mobile-search"
              placeholder="Multiverse of madness..."
            /><i class=" mobile-search fa-solid fa-magnifying-glass"></i>
          </div>
        </ul>
      </div>
   
      <div className="search-bar">
        <input type="text" className="desktop-search" placeholder="Family Guy" /><i class=" desktop-search fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="login-subs">
               <a href="/" className="subscribe">
          Subscribe
        </a>
      </div>
    </div>
  );
}

export default Navbar;
