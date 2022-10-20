import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { movieRecommendAction } from '../redux/actions/movieRecommendAction';
import MovieCard from './MovieCard';

const Recommendation = () => {
    const dispatch = useDispatch();
    let id = useParams('id');
    const { recommend, loading } = useSelector(state => state.recommend);

    console.log('recommend', recommend)
    useEffect(() => {
        dispatch(movieRecommendAction.getRecommend(id));

    }, []);

    if (loading) {
        return <ClipLoader color="{black}" loading={loading} size={150} />
    }
    return (
        <div className='review_info' >
            <Container >
                <Row className='test'>
                    {recommend.map(item => (
                        <Col lg={6}>
                            <MovieCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )

}

export default Recommendation
