import React, { useState } from 'react';
import {Button} from "react-bootstrap"
import MovieCard from '../MovieCard';
import { fetchFavList } from '../../API';


const Profile = (props) => {
  let user = props.user;
  const [favMovie, setFavMovie] = useState()

//async function to get list of user's favorite movie list
  const handleFavoriteClick = async () => {
    try {
      const response = await fetchFavList(user.email)

      const formattedMovie = response.data;
      console.log("response", response.data)
      setFavMovie(formattedMovie);
      console.log(formattedMovie); // Log the formatted movies

    } catch (error) {
      console.error('Error fetching Fav movies:', error);
    }
  };


  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md text-center text-md-left">
          <h2>{user.email}</h2>
        </div>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/128/2102/2102633.png"
        alt="Profile"
        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
      />
      
      <div>
        <Button variant="outline-success" onClick={handleFavoriteClick}>Your Favorited Movie List</Button>



      </div>
      {favMovie && favMovie.length > 0 && ( // Check if favMovie exists and has items
        <div>
         
         <ul>
        <div className="movie-list">
          {favMovie.map(movie => (
            <div className="movie-card">
              <li key={movie.id}><MovieCard movie={movie}/></li>
            </div>
          ))}
        </div>
      </ul>
        </div>
      )}
    </div>



  );
};

export default Profile;