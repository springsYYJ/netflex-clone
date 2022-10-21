import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function searchMovie({ keyword, page }) {
    return async (dispatch) => {
        if (!page) {
            page = 1
        }
        try {
            dispatch({ type: "SEARCH_MOVIE_REQUEST" })
            const searchMovieApi = await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=${page}`);
            dispatch({
                type: "SEARCH_MOVIE_SUCCESS",
                payload: {
                    searchMovie: searchMovieApi.data,
                    keyword: keyword,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "SEARCH_MOVIES_FAILURE" })
        }


    }
}

function setSearchKeyword({ keyword }) {
    return (dispatch) => {
        console.log('set key action', keyword)
        dispatch({ type: "SET_SEARCH_KEYWORD", payload: { keyword } })
    }
}

export const movieSearchAction = { searchMovie, setSearchKeyword }