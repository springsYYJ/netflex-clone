import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import MovieCard2 from '../components/MovieCard2';
import MoviesButton from '../components/MoviesButton';
import { movieAction } from '../redux/actions/movieAction';
import { movieSearchAction } from '../redux/actions/movieSearchAction';

const Movies = () => {
  let { popularMovies, loading } = useSelector(state => state.movie);
  let { searchMovie, keyword } = useSelector(state => state.search);

  const dispatch = useDispatch();

  if (searchMovie.results && keyword) {
    popularMovies = searchMovie
  }
  useEffect(() => {
    if (keyword) {
      dispatch(movieSearchAction.searchMovie({ keyword, page }))
    }
  }, [keyword]);

  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
    if (keyword) {
      dispatch(movieSearchAction.searchMovie({ keyword, page }));
    } else {
      dispatch(movieAction.getMovies({ page }))
    }
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
                activePage={popularMovies.page}
                itemsCountPerPage={popularMovies.results.length}
                totalItemsCount={popularMovies.total_results > 500 ? 10000 : popularMovies.total_results} // 페이징수는 totalItemsCount/itemsCountPerPage(10000/20 = 500)으로 계산된다. 최대값 500 
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
