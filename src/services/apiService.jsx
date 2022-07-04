import axios from 'axios';

const KEY = process.env.REACT_MOVIEDB_KEY;
const base_url = `https://api.themoviedb.org/3/`;
const movie_search_base_url = `${base_url}search/movie?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&query=`;
const serie_search_base_url = `${base_url}search/tv?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&query=`;

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const searchMovies = async (searchTerm, i) =>{
  try{
    const res = await axios.get(
      searchTerm ? `${movie_search_base_url}${searchTerm}&page=${i}`
    : `https://api.themoviedb.org/3/movie/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=${i}`);
return res.data;
  }catch (err){
    console.log(err);
  }
}
export const searchSeries = async (searchTerm, i) =>{
  try{
    const res = await axios.get(
      searchTerm ? `${serie_search_base_url}${searchTerm}&page=${i}`
    : `https://api.themoviedb.org/3/tv/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=${i}`);
return res.data;
  }catch (err){
    console.log(err);
  }
}

export const getMovies = async (i) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=${i}`, { headers });  
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };


  export const getSeries =  async (i) => {
    try {
        const ses = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=2028ddf941872bebea73ffc161803bd7&language=en-US&page=${i}`, {headers})
        return ses.data;
    }catch (err) {
        console.log(err);
    }
};
