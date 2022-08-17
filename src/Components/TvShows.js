import Posters from "./Posters";
import Card from "./Card";

function TvShows() {
    return ( 
        <div className="tv-shows">
        <div className="carousel">
          <Posters
            className="poster"
            url={
              "https://m.media-amazon.com/images/I/71lvxA724sL._AC_SY879_.jpg"
            }
          />
          <Posters
            className="poster"
            url={
              "http://tvseriesfinale.com/wp-content/uploads/2016/01/Bates-Motel-TV-show-on-AE-season-four-poster-e1453932830819.jpg"
            }
          />
          <Posters
            className="poster"
            url={
              "https://image.posterlounge.ie/images/l/1896880.jpg"
            }
          />
          <Posters
            className="poster"
            url={
              "https://tilt.goombastomp.com/wp-content/uploads/2021/12/MV5BODAzZjI5NGItNGNlYS00NWU1LTgwNjUtOGQwNWJiMWQwMDg1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_-692x1024.jpg"
            }
          />
          <Posters
            className="poster"
            url={
              "https://www.closeup-shop.com/media/oart_0/oart_r/oart_83962/846916_G873240.JPG"
            }
          />
          <Posters
            className="poster"
            url={"https://www.indiewire.com/wp-content/uploads/2019/06/25_american_soul.jpg?w=485"}
          />
      <Posters
            className="poster"
            url={
              "https://image.posterlounge.ie/images/l/1896880.jpg"
            }
          />
          <Posters
            className="poster"
            url={
              "https://tilt.goombastomp.com/wp-content/uploads/2021/12/MV5BODAzZjI5NGItNGNlYS00NWU1LTgwNjUtOGQwNWJiMWQwMDg1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_-692x1024.jpg"
            }
          />
        </div>
        <h2>Trending & Latest</h2>
        <div className="cards">
          <Card
            className="card"
            url={
              "https://www.indiewire.com/wp-content/uploads/2019/06/watchmen_ver3.jpg?w=510"
            }
          />
          <Card
            className="card"
            url={
              "https://m.media-amazon.com/images/I/81u7YEO-iJL._AC_SY606_.jpg"
            }
          />
          <Card
            className="card"
            url={
              "https://tilt.goombastomp.com/wp-content/uploads/2021/12/MV5BODUxYjMwZDYtYzdkYi00ZDgxLWFkY2YtODQ4MDhiYWM1MDhiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_-819x1024.jpg"
            }
          />
          <Card
            className="card"
            url={
              "https://i.pinimg.com/474x/03/3c/f5/033cf57372da057f72de6eb02ced064f--stranger-things-netflix-stranger-things-poster.jpg"
            }
          />
          <Card
            className="card"
            url={
              "https://mypostercollection.com/wp-content/uploads/2018/03/The-Flash-poster-Grant-Gustin-719x1024.jpg"
            }
          />
             <Card
            className="card"
            url={
              "https://www.indiewire.com/wp-content/uploads/2019/06/watchmen_ver3.jpg?w=510"
            }
          />
          <Card
            className="card"
            url={
              "https://m.media-amazon.com/images/I/81u7YEO-iJL._AC_SY606_.jpg"
            }
          />
          <Card
            className="card"
            url={
              "https://tilt.goombastomp.com/wp-content/uploads/2021/12/MV5BODUxYjMwZDYtYzdkYi00ZDgxLWFkY2YtODQ4MDhiYWM1MDhiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_-819x1024.jpg"
            }
          />
          <Card
            className="card"
            url={
              "https://i.pinimg.com/474x/03/3c/f5/033cf57372da057f72de6eb02ced064f--stranger-things-netflix-stranger-things-poster.jpg"
            }
          />
       
        </div>
        </div>
     );
}

export default TvShows;