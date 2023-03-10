import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
    return (
        <div className="Hero min-vh-100 w-100 d-flex align-items-center">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h1 className='fw-bold animate__animated animate__fadeInUp'>Colosal Cinema Indonesia</h1>
                        <p className="fs-5 animate__animated animate__fadeInUp">Website pencarian film dengan menggunakan API dari <a className="link" href="https://www.themoviedb.org/" target="_blank"><b>THEMOVIEDB</b></a></p>
                        <Button variant="light" className="fw-bold animate__animated animate__fadeInUp" href="#search"><i class="fa-solid fa-magnifying-glass"></i>&nbsp; Search Movies</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero