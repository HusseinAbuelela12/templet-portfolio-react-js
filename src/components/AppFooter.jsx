import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import "../App.css";
import Image_18 from '../images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png';

function AppFooter() {
    return (
        <footer>
            <Container>
                <Row className='align-items-center'>
                    <Col md="4" sm="12">
                        <Link to="/">
                        <img src={Image_18} alt="img"  className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s"/>
                        </Link>
                    </Col>
                    <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                        <HashLink to="/">Home</HashLink>
                        <HashLink to="#latest">Latest Builds</HashLink>
                        <HashLink to="#process">Process</HashLink>
                        <HashLink to="#service">Services</HashLink>
                        <HashLink to="#contact">Contact Us</HashLink>
                        <Link to="/Projects">Projects</Link>
                        </div>
                    </Col>
                    <Col md="4" sm="12" className='iconsdiv'>
                    <div className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                        <Link to="#" target="_blank"><i class="fa-brands fa-linkedin"></i></Link>
                        <Link to="#" target="_blank"><i class="fa-brands fa-facebook"></i></Link>
                        <Link to="#" target="_blank"><i class="fa-brands fa-stack-overflow"></i></Link>
                        </div>
                    </Col>
                </Row>
                <div className="copyright wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <p>© 2022 Your Name</p>
                    <p>Email: info@shilohcreative.com</p>
                </div>
            </Container>
        </footer>
    )
}

export default AppFooter;