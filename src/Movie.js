import React from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title}></MoviePoster>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                    <LineEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>

        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie....Poster"></img>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired

}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes={
    genre: PropTypes.string.isRequired
}

export default Movie