import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getReview( {id} ) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_REVIEW_REQUEST" })
            const movieReviewApi =await api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            console.log('movieReviewApi', movieReviewApi);
            dispatch({
                type: "GET_MOVIE_REVIEW_SUCCESS",
                payload: {
                    review: movieReviewApi.data,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "GET_MOVIE_REVIEW_FAILURE" })
        }


    }
}


export const movieReviewAction = {getReview};
