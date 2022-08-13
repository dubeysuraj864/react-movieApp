import React from "react";
import "./Style/Poster.css"

function Posters(props){
    return(
        <div className="posters">
            <img src={props.url} alt="Poster"/>
        </div>
    )
}

export default Posters;