import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getVideoId({ id }) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIE_VIDEO_REQUEST" })
            const movieVideosApi = await api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`)
            dispatch({
                type: "GET_MOVIE_VIDEO_SUCCESS",
                payload: {
                    video: movieVideosApi.data,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "GET_MOVIE_VIDEO_FAILURE" })
        }


    }
}

export const movieVideosAction = { getVideoId };
