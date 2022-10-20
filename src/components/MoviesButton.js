import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const MoviesButton = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button variant="outline-light" size="lg"  className="moviesButton">Sort</Button>
                        <Button variant="outline-light" size="lg"  className="moviesButton">Filter</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MoviesButton
