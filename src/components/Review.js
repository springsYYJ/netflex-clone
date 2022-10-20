import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { movieReviewAction } from '../redux/actions/movieReviewAction';

const Review = () => {
    const dispatch = useDispatch();
    let id = useParams('id');
    const { review, loading } = useSelector(state => state.review);

    console.log('review', review)
    useEffect(() => {
        dispatch(movieReviewAction.getReview(id));

    }, []);

    if (loading) {
        return <ClipLoader color="{black}" loading={loading} size={150} />
    }
    return (
        <div className='review_info'>
            <h4>{review.results.length > 0 ? review.results[0].author : ''}</h4>
            <p>{review.results.length > 0 ? review.results[0].content : ''}</p>
        </div>
    )
}

export default Review
