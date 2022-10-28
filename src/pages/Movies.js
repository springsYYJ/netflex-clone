import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import MovieCard2 from '../components/MovieCard2';
import MoviesButton from '../components/MoviesButton';
import { movieAction } from '../redux/actions/movieAction';
import { movieSearchAction } from '../redux/actions/movieSearchAction';
import { movieSortingAction } from '../redux/actions/movieSortingAction';

const Movies = () => {
  const { popularMovies, loading } = useSelector(state => state.movie);
  const { searchMovie, keyword } = useSelector(state => state.search);
  const { discoverMovie, sortKeyword } = useSelector(state => state.discover);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  let movieList = {};

  useEffect(() => {
    if (keyword) {
      dispatch(movieSearchAction.searchMovie({ keyword, page }))
    }
  }, [keyword]);

  useEffect(() => {
    if (sortKeyword) {
      dispatch(movieSortingAction.getSortByMovie({ sortKeyword, page }))
    }
  }, [sortKeyword]);

  if (searchMovie.results && keyword) {
    movieList = searchMovie
  } else if (discoverMovie.results) {
    movieList = discoverMovie
  } else {
    movieList = popularMovies
  }
  const handlePageChange = (page) => {
    setPage(page);
    if (keyword) {
      dispatch(movieSearchAction.searchMovie({ keyword, page }));
    } else if (sortKeyword) {
      dispatch(movieSortingAction.getSortByMovie({ sortKeyword, page }))
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
                {movieList.results.map((item) => (
                  <Col lg={6}>
                    <MovieCard2 key={item.id} item={item} />
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
                activePage={movieList.page}
                itemsCountPerPage={movieList.results.length}
                totalItemsCount={movieList.total_results > 500 ? 10000 : movieList.total_results} // 페이징수는 totalItemsCount/itemsCountPerPage(10000/20 = 500)으로 계산된다. 최대값 500 
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
