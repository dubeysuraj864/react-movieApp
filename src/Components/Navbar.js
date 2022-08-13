import React from "react";
import "./Style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <input type="checkbox" id="menu" name="menu" />
        <label htmlFor="menu" id="burger">
          X
        </label>
        <span className="logo-name"> Bingle Watch</span>

        <ul class="links">
          <a href="/" target="_blank">
            Downloads
          </a>
          <a href="/" target="_blank">
            Watchlist
          </a>
          <a href="/" target="_blank">
            Channels
          </a>
          <a href="/" target="_blank">
            Languages
          </a>
          <a href="/" target="_blank">
            Genres
          </a>
          <div className="search-bar">
            <input
              type="text"
              className="mobile-search"
              placeholder="Light year..."
            />
          </div>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" className="desktop-search" placeholder="Search .." />
      </div>
    </div>
  );
}

export default Navbar;
