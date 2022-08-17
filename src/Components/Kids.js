import Carousel from "./Carousel.js";
import Cards from "./Cards.js";
import "./Style/Kids.css"

function Kids() {
  return (
    <div className="Kids">
      <Carousel className="carousel" /> <br />
      <h2>Trending & Latest</h2>
      <Cards className="card" />
    </div>
  );
}

export default Kids;
