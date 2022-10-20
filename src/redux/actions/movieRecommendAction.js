import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getRecommend( {id} ) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_RECOMMEND_REQUEST" })
            const movieRecommendApi =await api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
            console.log('movieRecommendApi', movieRecommendApi);
            dispatch({
                type: "GET_MOVIE_RECOMMEND_SUCCESS",
                payload: {
                    recommend: movieRecommendApi.data.results,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "GET_MOVIE_RECOMMEND_FAILURE" })
        }


    }
}


export const movieRecommendAction = {getRecommend};
