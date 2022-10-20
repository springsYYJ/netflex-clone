import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getMovieDetail( {id} ) {
    console.log('LANGUAGE', API_KEY)
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_DETAIL_REQUEST" })
            const movieDetailApi =await api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
            dispatch({
                type: "GET_MOVIE_DETAIL_SUCCESS",
                payload: {
                    detail: movieDetailApi.data,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "GET_MOVIE_DETAIL_FAILURE" })
        }


    }
}

export const movieDetailAction = { getMovieDetail, }