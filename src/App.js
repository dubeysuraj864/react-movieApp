import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Kids from "./Components/Kids";
import Sports from "./Components/Sports";
import Tvshows from "./Components/TvShows";
import Horror from "./Components/Horror";
import Comedy from "./Components/Comedy";
import Adventure from "./Components/Adventure";
import Action from "./Components/Action";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navbar" />
        <div className="category">
        <Link to="/Action" className="action-route">
          <div className="link">Action</div>
        </Link>
        <Link to="/Adventure" className="adventure-route">
          <div className="link">Adventure</div>
        </Link>
        <Link to="/Comedy" className="comedy-route">
          <div className="link">Comedy</div>
        </Link>
        <Link to="/Horror" className="horror-route">
          <div className="link">Horror</div>
        </Link>
        {/* <Link to="/TvShows" className="tvshows-route">
          TV shows
        </Link> */}
        <Link to="/Sports" className="sports-route">
          <div className="link">Sports</div>
        </Link>
        <Link id="kid" to="/kids" className="kids-route">
          <div className="link">Kids</div>
        </Link>
        </div>
        <div className="cards">
          <Routes>
            {/* <Route path="/Sports" element={<Sports />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Tvshows" element={<Tvshows />} />
            <Route path="Horror" element={<Horror />} />
            <Route path="/Comedy" element={<Comedy />} />
            <Route path="/Adventure" element={<Adventure />} />
            <Route path="/Action" element={<Action />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
      <div className="home">
        <h1>Adventure</h1>
        <Adventure />
        <h1>Comedy</h1>
        <Comedy />
        <h1>Kids</h1>
        <Kids />
        <h1>Action</h1>
        <Action />
        <h1>Horror</h1>
        <Horror />
        <h1>TV Shows</h1>
        <Tvshows />
        <h1>Sports</h1>
        <Sports />
      </div>
    </div>
  );
}


export default App;
