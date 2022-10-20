let initialState = {
    searchMovie: {},
    loading: true
}
function movieSearchReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "SEARCH_MOVIE_REQUEST":
            return { ...state, loading: true }
        case "SEARCH_MOVIE_SUCCESS":
            console.log('payload',payload)
            return {
                ...state,
                searchMovie: payload.searchMovie,
                loading: false
            }
        case "SEARCH_MOVIES_FAILURE":
            return { ...state, loading: false }
        default:
            return { ...state }
    }
}
export default movieSearchReducer