import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { movieSortingAction } from '../redux/actions/movieSortingAction';
import DropdownButton from 'react-bootstrap/DropdownButton'
const MoviesButton = () => {
    const dispatch = useDispatch();
    const { sortKeyword } = useSelector(state => state.discover);

    const sortItemList = ['popularity.asc', 'popularity.desc', 'release_date.asc', 'release_date.desc', 'revenue.asc', 'revenue.desc', 'primary_release_date.asc', 'primary_release_date.desc', 'original_title.asc', 'original_title.desc', 'vote_average.asc', 'vote_average.desc', 'vote_count.asc', 'vote_count.desc']
    const setSortByKeyword = (event) => {
        console.log(event);
        const sortKeyword = event
        dispatch(movieSortingAction.setSortKeyword({ sortKeyword }))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        <Accordion defaultActiveKey="0" >
                            <Accordion.Item eventKey="1">
                                <Accordion.Header >Sort </Accordion.Header>
                                <Accordion.Body>
                                    Sort Results By
                                    {
                                        <DropdownButton
                                            id="movies-button-dropdown"
                                            variant="outline-light"
                                            className="movies-button-dropdown"
                                            onSelect={setSortByKeyword}
                                            title={sortKeyword ? sortKeyword : 'none'}
                                        >
                                            {sortItemList.map((item, index) => {
                                                if (sortKeyword == item) {

                                                    return (<Dropdown.Item eventKey={item} key={index} active> {item}</Dropdown.Item>)
                                                } else {
                                                    return (<Dropdown.Item eventKey={item} > {item}</Dropdown.Item>)

                                                }
                                            })}
                                        </DropdownButton>
                                    }
                                    {/* {<Dropdown onSelect={setSortByKeyword}>
                                        <Dropdown.Toggle variant="outline-light" size="sm" className='movies-button-dropdown ' id="dropdown-basic">
                                            selected
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {sortItemList.map((item) => {
                                                if (sortKeyword == item) {
                                                    return (<Dropdown.Item eventKey={item} active> {item}</Dropdown.Item>)
                                                } else {
                                                    return (<Dropdown.Item eventKey={item} > {item}</Dropdown.Item>)

                                                }
                                            })}
                                            <Dropdown.Item > test</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>} */}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* 
                        <Button variant="outline-light" size="lg" className="moviesButton">Filter</Button> */}
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default MoviesButton
