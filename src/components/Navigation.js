import React, {useState} from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { movieSearchAction } from '../redux/actions/movieSearchAction';

const Navigation = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate() // <-- hooks must be INSIDE the component
    const dispatch = useDispatch();

    const searchMovie = (event) => {
        dispatch(movieSearchAction.searchMovie({keyword}));
    }

    const onEnterPress = (event) =>{
        if (event.key === 'Enter') {
            event.preventDefault();
            dispatch(movieSearchAction.searchMovie({keyword}));
            navigate('/movies');
        }
    }
    return (

        <Navbar expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#"><img width={150} src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='nav-item'>Home</Link>
                        <Link to="/movies" className='nav-item'>Movies</Link>
                    </Nav>

                    <Button variant="outline-light" className="me-2">KO</Button>
                    <Form className="d-flex" >
                        <Form.Control onChange={(event) => setKeyword(event.target.value)} onKeyPress={(event) => onEnterPress(event)}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger" onClick={searchMovie}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
