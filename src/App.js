import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';


function App() {
  return (
    <div className="App">
    <Navbar className="navbar"/>
    <Carousel className="carousel" />
    <p>Latest & Trending</p>
    <Card className="Card" />
    </div>
  );
}

export default App;
