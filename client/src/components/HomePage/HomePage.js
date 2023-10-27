import { useState, useEffect} from 'react'
import MovieCard from '../MovieCard';
import {fetchPopular} from '../../API';


// import ViewFilm from './ViewFilm'

// import { Route, Routes, Link, useParams } from 'react-router-dom';


const HomePage = () => {
    const [movies, setMovies] = useState([]);

  
      // Make the GET request to fetch popular movies
      
  useEffect(() => {
    
    const fetchMovies = async () => {
      try{
        const response = await fetchPopular()

        const formattedMovies = response.data.results; 
        setMovies(formattedMovies);
        console.log(formattedMovies); // Log the formatted movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies(); // Call the fetchMovies function

  }, []); // The empty dependency array ensures the effect runs once
  
    return (
      <div>
   
        <h2>Popular Movies</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}><MovieCard movie={movie}/></li>
          ))}
        </ul>
      </div>
    )};
  
  
  export default HomePage;
