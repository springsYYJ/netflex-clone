let initialState = {
    searchMovie: {},
    keyword : '',
    loading: true
}
function movieSearchReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "SEARCH_MOVIE_REQUEST":
            return { ...state, loading: true }
        case "SEARCH_MOVIE_SUCCESS":
            console.log('payload', payload)
            return {
                ...state,
                searchMovie: payload.searchMovie,
                keyword : payload.keyword,
                loading: false
            }
        case "SEARCH_MOVIES_FAILURE":
            return { ...state, loading: false }
        case "SET_SEARCH_KEYWORD":
            console.log('set Key', payload.keyword)
            return {
                ...state,
                keyword : payload.keyword,
                loading: false
            }
        default:
            return { ...state }
    }
}
export default movieSearchReducer