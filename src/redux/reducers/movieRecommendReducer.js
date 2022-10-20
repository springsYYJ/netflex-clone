let initialState = {
    recommend: {},
    loading: true
}
function movieRecommendReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "GET_MOVIE_RECOMMEND_REQUEST":
            return { ...state, loading: true }
        case "GET_MOVIE_RECOMMEND_SUCCESS":
            return {
                ...state,
                recommend: payload.recommend,
                loading: false
            }
        case "GET_MOVIES_RECOMMEND_FAILURE":
            return { ...state, loading: false }
        default:
            return { ...state }
    }
}
export default movieRecommendReducer