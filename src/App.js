import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, []);

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col className='d-flex justify-content-center'>
          <Card className='m-3' style={{backgroundColor:'#CBE4DE', width: '22rem' }} data-aos="zoom-in-up" key = {i}>
            <Card.Img variant="top" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
            <Card.Body>
              <Card.Title className='Movie-title fw-bold mt-3'>{movie.title}</Card.Title>
              <Card.Text>
                <p className='Movie-date'><b>Release :</b> {movie.release_date}</p>
                <p className='Movie-date fw-bold'>Rating :</p>
                <h4 className='Movie-rate'>{movie.vote_average}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }
  
  const search = async(q) => {
    if(q.length > 3) {
        const query = await searchMovie(q)
        setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header" id='home'>
        <Hero/>
      </header>
      <div className="Main min-vh-100" id='search'>
        <Container>
          <Row>
            <Col>
              <input className='Movie-search' data-aos="fade-up" placeholder='Search Your Favorite Movie' onChange={({target}) => search(target.value)}/>
            </Col>
          </Row>
          <Row>
            <PopularMoviesList/>
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
