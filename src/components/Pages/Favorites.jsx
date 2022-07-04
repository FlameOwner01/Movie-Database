import { useState } from "react";

const Favorites = () =>{

  return (
    <>
      <div className="movielist screen">
      <div className="top-bar">
        <Link to="/" className="title1" style={{ textDecoration: "none" }}>
          <h1 className="title">Movies Database</h1>
        </Link>

        <div className={`cta-1 ${state1}`}> 
          <Link
            to="/movies"
            style={{ textDecoration: "none", color: "rgba(0,0,0,1)" }}
          >
            <div onClick={openMovies}>Movies</div>
          </Link>
        </div>
        <div className={`cta ${state2}`}>
          <Link
            to="/series"
            style={{ textDecoration: "none", color: "rgba(0,0,0,1)" }}
          >
            <div onClick={openSeries}>Series</div>
          </Link>
        </div>
      </div>

      <div className="bottom-bar" id="movies">
        <span className="black">
          <img
            className="poster"
            src="https://image.tmdb.org/t/p/w1280/7q448EVOnuE3gVAx24krzO7SNXM.jpg"
            alt="shawshank"
          />
        </span>

          
        </div>
      </div>
    </>
  );
};

export default Favorites;
