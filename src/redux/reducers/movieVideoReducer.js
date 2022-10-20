let initialState = {
    video: {},
    loading: true
}
function movieVideoReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "GET_MOVIE_VIDEO_REQUEST":
            return { ...state, loading: true }
        case "GET_MOVIE_VIDEO_SUCCESS":
            console.log('payload.video', payload.video)
            return {
                ...state,
                video: payload.video,
                loading: false
            }
        case "GET_MOVIE_VIDEO_FAILURE":
            return { ...state, loading: false }
        default:
            return { ...state }
    }
}
export default movieVideoReducer