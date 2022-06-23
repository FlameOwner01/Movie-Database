import React, { useEffect, useState } from 'react'; 
import "../../styles/style.css";
import { Link } from 'react-router-dom';
import { getMovies, searchMovies } from '../../services/apiService';
import TVblock from '../TVblock';


 const Movies = () => {

    const [state1, setState1] = useState("active1");
    const [state2, setState2] = useState("");
    const [movies, setMovies] = useState([]);
    const [resultsm, setmResult] = useState([]);
    const [term, setTerm] = useState("");

    async function obliterateMovies(){
      const mvies = await getMovies(1);
      const mvies1 = await getMovies(2);
      setmResult(mvies.results);
      setMovies(mvies1.results);
      return mvies;
    }

    async function browseMovies(searchTerm){
      const mvies = await searchMovies(searchTerm, 1);
      const mvies1 = await searchMovies(searchTerm, 2);
      setMovies(mvies1.results);
      setmResult(mvies.results);
      return mvies;
    }

    useEffect(()=>{
      obliterateMovies();
    }, []);


    useEffect(()=>{
      if(term.length >= 3){
        browseMovies(term);
      }
    },  [term]);
    
    const openSeries = () => {
        setState2("active");
        setState1("");
    }

    const openMovies = () => {
      setState1("active1");
      setState2("");
    }

    const handleChange = (e) =>{
      setTerm(e.target.value);
    }

  return (
    <div className="movielist screen">
        <div className="top-bar">
          <Link to ="/" className='title1' style={{textDecoration:"none"}}>
          <h1 className="title">Movies Database</h1>
          </Link>
            
        <div className= {`cta-1 ${state1}`}>
            <Link to ="/movies" style={{textDecoration:"none", color: "rgba(0,0,0,1)"}}> 
            <div onClick={openMovies}>Movies</div>
            </Link>
        </div>
        <div className= {`cta ${state2}`}>
            <Link to ="/series" style={{textDecoration:"none", color: "rgba(0,0,0,1)"}}> 
            <div onClick={openSeries}>Series</div>
            </Link>
        </div>  
        
        </div>
  
       <div className='bottom-bar' id="movies">
    
        <span className='black'>
        <img className='poster' src = "https://image.tmdb.org/t/p/w1280/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg" alt="shawshank"/>
        </span>
      
        <div className="poster-info">
       <div className={`nav-container`}>
       <input className='search' value={term} onChange={(e) => handleChange(e)}></input>
            </div> 
       </div>
       
            <div className='home-page-title'>
              <h1>
                Top Rated Movies
              </h1>
            </div>
            <div className='tvblock'>


                {
                  resultsm &&
                   resultsm.map(({title, overview, vote_average, backdrop_path, poster_path, id}) =>{
                    return <TVblock
                        title={title}
                        overview={overview}
                        vote_average={vote_average}
                        backdrop_path= {backdrop_path}
                        poster_path={poster_path}
                        key={id}
                        id = {id}
                      />
                     })
                }
            
                {
                   movies &&
                   movies.map((e, i) =>{
                     if(i >= 10) return null;
                     return <TVblock
                       title={e.title}
                       overview={e.overview}
                       vote_average={e.vote_average}
                       backdrop_path= {e.backdrop_path}
                       poster_path={e.poster_path}
                       key={e.id}
                       id = {e.id}
                     />
                   })
                }
            </div>
       </div>
    </div>
  )
}

export default Movies;