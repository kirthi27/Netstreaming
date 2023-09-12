import React, { useEffect, useState } from 'react'
import axios from "./axios";
import "./Row.css";

const Row = ({title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies]= useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>


  useEffect(() => {
    const fetchData = async () =>{
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    };

fetchData()
  }, [fetchUrl]);
  console.log(movies);

    return (
    <div className='row'>
      <h2>{title}</h2>
        <div className="row_posters">        
      {movies.map(
            
            (movie) => 
        ((isLargeRow && movie.poster_path) ||(!isLargeRow && movie.backdrop_path)) && (
            <img key ={movie.id} className={`row_poster ${isLargeRow && "row_posterLarger"}`}
            src ={`${base_url }${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt=' '/>
        ))
        }
        </div>
        </div>
        )
    }
      
export default Row
