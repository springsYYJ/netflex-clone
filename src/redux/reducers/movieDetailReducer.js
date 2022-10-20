let initialState = {
    detail: {},
    loading: true
}
function movieDetailReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "GET_MOVIE_DETAIL_REQUEST":
            return { ...state, loading: true }
        case "GET_MOVIE_DETAIL_SUCCESS":
            return {
                ...state,
                detail: payload.detail,
                loading: false
            }
        case "GET_MOVIES_DETAIL_FAILURE":
            return { ...state, loading: false }
        default:
            return { ...state }
    }
}
export default movieDetailReducer