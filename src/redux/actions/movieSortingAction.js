import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getSortByMovie({ sortKeyword, page }) {
    return async (dispatch) => {
        if (!page) {
            page = 1
        }
        try {
            console.log('getSrtByMovieAction', { sortKeyword, page });
            dispatch({ type: "GET_DISCOVER_MOVIE_REQUEST" })
            const sortByMovieApi = await api.get(`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortKeyword}&page=${page}`)
            dispatch({
                type: "GET_DISCOVER_MOVIE_SUCCESS",
                payload: {
                    discoverMovie: sortByMovieApi.data,
                    sortKeyword: sortKeyword,
                    loading: false
                }
            })
        } catch (error) {
            //에러 행들링
            dispatch({ type: "GET_DISCOVER_MOVIES_FAILURE" })
        }


    }
}
function setSortKeyword({ sortKeyword }) {
    return (dispatch) => {
        console.log('set sortKeyword action', sortKeyword)
        dispatch({ type: "SET_SORT_KEYWORD", payload: { sortKeyword } })
    }
}
export const movieSortingAction = { getSortByMovie, setSortKeyword }