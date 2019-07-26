import React from 'react';

const MovieItem = (props) => {
	const movies = props.movies;
	return (
		<div className="movies-container">
            {movies.map(movie => {
            	const imgUrl = (movie.Poster && movie.Poster !== 'N/A') ? movie.Poster : "https://via.placeholder.com/300.png/09f/fff?text=No+Image+Available";
            	return(
              		<div key={movie.imdbID} className="movie-item">
		                <div className="movie-img-ctr">
		                  <img className="img-fluid img-thumbnail img-responsive" src={imgUrl} alt={movie.Title} />
		                </div>
		                <article className="movie-detail"><span><strong>Name:</strong> </span><span>{movie.Title}</span></article>
		                <article className="movie-detail"><span><strong>Year:</strong> </span><span>{movie.Year}</span></article>
		                <article className="movie-detail"><span><strong>imdbID:</strong> </span><span>{movie.imdbID}</span></article>
		                <article className="movie-detail"><span><strong>Type:</strong> </span><span>{movie.Type}</span></article>
          			</div>
              	);
            })}
		</div>
	);
};

export default MovieItem;