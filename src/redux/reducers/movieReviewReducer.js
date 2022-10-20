let initialState = {
    review: {},
    loading: true
}
function movieReviewReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "GET_MOVIE_REVIEW_REQUEST":
            return { ...state, loading: true }
        case "GET_MOVIE_REVIEW_SUCCESS":
            return {
                ...state,
                review: payload.review,
                loading: false
            }
        case "GET_MOVIES_REVIEW_FAILURE":
            return { ...state, loading: false }
        default:
            return { ...state }
    }
}
export default movieReviewReducer