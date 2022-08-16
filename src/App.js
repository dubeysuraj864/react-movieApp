import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import kids from './Components/Kids';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Navbar className="navbar"/>
    {/* <Carousel className="carousel" /> */}
    <p>Latest & Trending</p>
    {/* <Details /> */}
    <div className="cards">
   
    <BrowserRouter>  
    <Link to="/">Home</Link>
    <Link id="kid" to="/kids">Kids</Link>
    <Routes >
      <Route path="/kids" element={<Carousel className="carousel" />}/>
    </Routes>
    </BrowserRouter>


    {/* <Card className="Card" url={"https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Character-Posters.jpg"} />
    <Card className="Card" url={"https://img1.od-cdn.com/ImageType-100/2508-1/%7B37689648-C475-4B34-AEDF-BF185FDA2E7C%7DImg100.jpg"} />
    <Card className="Card" url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wall-e-movie-poster-best-pixar-films-1559759122.jpg?crop=1xw:1xh;center,top&resize=480:*"} />
    <Card className="Card" url={"http://imagizer.imageshack.us/v2/1600x1200q90/923/MYmKHc.png"} />
    <Card className="Card" url={"https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Character-Posters.jpg"} /> */}
   
    
    </div>
    
     </div>
  );
}

export default App;
