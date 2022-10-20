import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function searchMovie( {keyword} ) {
    console.log('LANGUAGE', API_KEY)
    return async (dispatch) => {
        try {
            dispatch({ type: "SEARCH_MOVIE_REQUEST" })
            console.log('test')
            const searchMovieApi =await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}`)
            dispatch({
                type: "SEARCH_MOVIE_SUCCESS",
                payload: {
                    searchMovie: searchMovieApi.data,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "SEARCH_MOVIES_FAILURE" })
        }


    }
}

export const movieSearchAction = { searchMovie, }