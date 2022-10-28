import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import movieReviewReducer from "./movieReviewReducer";
import movieRecommendReducer from "./movieRecommendReducer";
import movieVideoReducer from "./movieVideoReducer";
import movieSearchReducer from "./movieSearchReducer";
import movieSortReducer from "./movieSortReducer";

export default combineReducers({ movie: movieReducer, detail: movieDetailReducer, review: movieReviewReducer, recommend : movieRecommendReducer, video:movieVideoReducer, search:movieSearchReducer, discover:movieSortReducer })