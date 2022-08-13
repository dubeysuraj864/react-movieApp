import React from "react";
import "./Style/Navbar.css"

function Navbar(){



    return(
        <div className="navbar">
            <div className="logo">
                <input type="checkbox" id="menu" name="menu" />
                <label htmlFor="menu" id="burger">X</label>
               <span className="logo-name"> Bingle Watch</span>
          
               <ul class="links">
               <a href="http://" target="_blank" rel="noopener noreferrer">downloads</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Watchlist</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Channels</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Languages</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Genres</a>
               </ul>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search .." />
            </div>
        </div>
    )
}

export default Navbar;