import React from "react";
import Posters from "./Posters";
import "./Style/Carousel.css";

function Carousel(){
    return(
        <div className="carousel">
            <Posters className="poster" url={"https://m.media-amazon.com/images/I/719lW69kGoL._AC_SY741_.jpg"}/>
            <Posters className="poster" url={"https://preview.redd.it/1444q03v0ox81.jpg?width=640&crop=smart&auto=webp&s=bddd4bc7b9121a411892ba7d6f57923deb9ed2eb"}/>
            <Posters className="poster" url={"https://i5.walmartimages.com/asr/f19376c7-a141-4469-967e-373a295f67a2_1.0efc3602a445f967be7ee3d36ca47664.jpeg"}/>
            <Posters className="poster" url={"https://i.pinimg.com/564x/fc/ec/45/fcec45580fe13650786f24612eed520e.jpg"}/>
            <Posters className="poster" url={"https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1575481347398-A08U8Q2DVCF47NIPVIAK/incred_poster.jpg"}/>
           
        </div>
    )
}

export default Carousel;