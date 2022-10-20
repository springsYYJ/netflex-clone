import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/actions/movieAction';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie);
      
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.getMovies(1))
    }, []);
    // loading이 true면 loading스피너를 보여주고
    // loading이 false면 데이터를 보여준다.

    // true : 데이터 도착 전
    // false : 데이터 도착 후, error
    if (loading) {
        return <ClipLoader color="{black}" loading={loading} size={150} />
    }
    return (
        <div>
            {<Banner movie={popularMovies.results[0]} />}
            <h1>pop Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1>top Movie</h1>
            <MovieSlide movies={topRatedMovies} />
            <h1>upcoming Movie</h1>
            <MovieSlide movies={upcomingMovies} />
        </div>
    )
}

export default Home
