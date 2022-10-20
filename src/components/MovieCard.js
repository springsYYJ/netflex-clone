import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
    const { genreList } = useSelector(state => state.movie);
    const navigate = useNavigate();
    const goMovieDetail = () => {
        navigate(`/movies/${item.id}`);
    }
    return (
        <div className='card' onClick={goMovieDetail}
            style={{
                backgroundImage:
                    "url(" + `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` + ")"
            }}>
            <div className="overlay" >
                <h4>{item.title}</h4>
                <div>{item.genre_ids.map(id => (
                    <Badge bg="danger">
                        {genreList.find(item => item.id == id).name}
                    </Badge>
                ))}
                </div>
                <div>
                    <span>{item.vote_average}</span>
                    <span>{item.adult ? "청불" : "Under 18"}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
