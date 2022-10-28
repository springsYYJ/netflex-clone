let initialState = {
    discoverMovie: {},
    sortKeyword: '',
    loading: true
}
function movieSortReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "GET_DISCOVER_MOVIE_REQUEST":
            return { ...state, loading: true }
        case "GET_DISCOVER_MOVIE_SUCCESS":
            return {
                ...state,
                discoverMovie: payload.discoverMovie,
                sortKeyword: payload.sortKeyword,
                loading: false
            }
        case "GET_DISCOVER_MOVIES_FAILURE":
            return { ...state, loading: false }
        case "SET_SORT_KEYWORD":
            console.log('set Key', payload.keyword)
            return {
                ...state,
                sortKeyword: payload.sortKeyword,
                loading: false
            }
        default:
            return { ...state }
    }
}
export default movieSortReducer