import React from "react";
import "./Style/Card.css"

function Card(props){
    return(
        <div className="card">
                <img src={props.url} alt="" />
        </div>
    )
}

export default Card;