import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getMovies({page}) {
    return async (dispatch) => {
        console.log('API_KEY', API_KEY)
        try {
            dispatch({ type: "GET_MOVIES_REQUEST" })
            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)

            const topRateApi = api.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);

            const upComingApi = api.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);

            const genreApi = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([popularMovieApi, topRateApi, upComingApi, genreApi]);
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "GET_MOVIES_FAILURE" })
        }


    }
}

export const movieAction = {
    getMovies,
}