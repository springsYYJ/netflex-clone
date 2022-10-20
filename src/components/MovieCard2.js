import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovieSocialInfo from './MovieSocialInfo';

const MovieCard = ({ item }) => {
    const dispatch = useDispatch();
    const { genreList } = useSelector(state => state.movie);
    const navigate = useNavigate();
    const goMovieDetail = () => {
        navigate(`/movies/${item.id}`);
    }

    return (

        <div className='movie_card' onClick={goMovieDetail}>
            <div className='info_section'>
                <div className='movie_header'>
                    <img className='locandina' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}></img>
                    <h1>{item.title}</h1>
                    <h4>
                        <time dateTime='1664463600000'>{item.release_date.substr(0, 4)}</time>
                    </h4>
                    {item.genre_ids.map(id => (
                        <Badge bg="danger">
                            {genreList.find(item => item.id == id).name}
                        </Badge>
                    ))}
                </div>
                <div className='movie_desc'>
                    <p class="text">{item.overview}</p>
                </div>
                <div className='movie_social'>
                    <MovieSocialInfo detail={item} />
                </div>
            </div>
            <div className='blur_back' style={{
                backgroundImage:
                    "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.backdrop_path}` + ")"

            }}>
            </div>
        </div >
    )
}

export default MovieCard
