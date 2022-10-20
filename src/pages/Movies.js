import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import MovieCard2 from '../components/MovieCard2';
import MoviesButton from '../components/MoviesButton';
import { movieAction } from '../redux/actions/movieAction';

const Movies = () => {
  let { popularMovies, loading } = useSelector(state => state.movie);
  let { searchMovie } = useSelector(state => state.search);
  if(searchMovie.results){
    popularMovies = searchMovie
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies({ page }))
  }, []);

  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
    dispatch(movieAction.getMovies({ page }))
  };
  if (loading) {
    return <ClipLoader color="{black}" loading={loading} size={150} />
  }
  return (
    <div className=''>
      <Container>
        <Row>
          <Col lg={4}>
            <MoviesButton />
          </Col>
          <Col lg={8}>
            <div className='movie-section'>
              <Row>
                {popularMovies.results.map(item => (
                  <Col lg={6}>
                    <MovieCard2 item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} />
          <Col lg={8}>
            <div className='pagenation'>
              <Pagination
                activePage={page}
                itemsCountPerPage={20}
                totalItemsCount={10000}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Movies
