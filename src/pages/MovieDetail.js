import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import MovieSocialInfo from '../components/MovieSocialInfo';
import Recommendation from '../components/Recommendation';
import Review from '../components/Review';
import Trailer from '../components/Trailer';
import { movieAction } from '../redux/actions/movieAction';
import { movieDetailAction } from '../redux/actions/movieDetailAction';

const MovieDetail = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  let id = useParams('id');
  const { detail, loading } = useSelector(state => state.detail);
  const { genreList } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetail(id));
    dispatch(movieAction.getMovies(1));

  }, []);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)

  if (loading) {
    return <ClipLoader color="{black}" loading={loading} size={150} />
  }
  return (
    <div>
      <Container>
        <Row>
          <Col className='detail_poster'>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}`} />
          </Col>
          <Col >
            <div>
              <div>
                {detail.genres.map(genre => (
                  <Badge bg="danger">
                    {genre.name}
                  </Badge>
                ))}
              </div>
              <h1>
                {detail.original_title}
              </h1>
              <h3>{detail.tagline}</h3>
              <MovieSocialInfo detail={detail}/>
              <div>
                <p>{detail.overview}</p>
              </div>
            </div>
            <div>
              <ul className='movie_info_list'>
                <li>
                  <Badge bg="danger">Budget</Badge>${detail.budget}
                </li>
                <li>
                  <Badge bg="danger">Revenue</Badge>${detail.revenue}
                </li>
                <li>
                  <Badge bg="danger">Release Day</Badge>{detail.release_date}
                </li>
                <li>
                  <Badge bg="danger">Time</Badge>{detail.runtime}
                </li>
                <li>
                  <Button variant="light" onClick={handleShow}>
                    <FontAwesomeIcon icon={faFilm} onClick={handleShow} />Watch Trailer
                  </Button>

                  <Modal show={show} onHide={handleClose} dialogClassName="trailerModal">
                    <Modal.Header closeButton={true} closeVariant='blue'>

                    </Modal.Header>
                    <Modal.Body><Trailer /></Modal.Body>

                  </Modal>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Review />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Recommendation />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail
