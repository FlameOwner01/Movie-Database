import React, { useEffect, useState } from 'react'; 
import "../../styles/style.css";
import { Link } from 'react-router-dom';
import { getSeries, searchSeries } from '../../services/apiService';
import SeriesBlock  from './SeriesBlock';



 const Series = () => {

  const [term, setTerm] = useState("");
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("active")
  const [series, setSeries] = useState([]);
  const [seriesResult, setSeriesResults] = useState([]);




  async function obliterateSeries(){
    const sers = await getSeries(1);
      const sers1 = await getSeries(2);
      setSeriesResults(sers.results);
      setSeries(sers1.results);
      return sers;
  }
  async function browseSeries(searchTerm){
    const sries = await searchSeries(searchTerm, 1);
    const sries1 = await searchSeries(searchTerm, 2);
    setSeries(sries1.results);
    setSeriesResults(sries.results);
    return sries;
  }
    useEffect(()=>{
      obliterateSeries();
    }, []);
    
    useEffect(()=>{
      if(term.length >= 3){
        browseSeries(term);
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
        <img className='poster' src ="https://image.tmdb.org/t/p/w1280/7q448EVOnuE3gVAx24krzO7SNXM.jpg" alt="shawshank"/>
        </span>
      

        <div className="poster-info">
       <div className="nav-container ">
       <input className='search' value={term} onChange={(e) => handleChange(e)}></input>
            </div> 
       </div>
            <div className='home-page'>
              <h1>
                Top Rated Series
              </h1>
            </div>
            <div className='tvblock'>
                {
                  seriesResult &&
                  seriesResult.map(({name, overview, vote_average, backdrop_path, poster_path, id}) =>{
                    return <SeriesBlock
                      name={name}
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
                   series &&
                   series.map((e, i) =>{
                     if(i >= 10) return null;
                     return <SeriesBlock
                        name={e.name}
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

export default Series;