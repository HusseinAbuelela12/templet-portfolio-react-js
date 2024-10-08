import React from 'react';
import { Container , Navbar , Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Image_1 from '../images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png';
import "../App.css";
const AppNavbar = () => {
    return (
    <>
    <Navbar  expand="lg" className="the-nav">
        <Container>
            <NavLink to="/#home"><img className='img-1' src={Image_1} alt="img" /></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"><i class="fa-solid fa-bars"></i></Navbar.Toggle> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navLinks">
                    <HashLink className='nav-link the-link text-white fs-5' to="/">Home</HashLink>
                    <HashLink className='nav-link the-link text-white fs-5' to="/#latest">Latest</HashLink>
                    <HashLink className='nav-link the-link text-white fs-5' to="/#process">Process</HashLink>
                    <HashLink className='nav-link the-link text-white fs-5' to="/#service">Services</HashLink>
                    <HashLink className='nav-link the-link text-white fs-5' to="/#contact">Contact Us</HashLink>
                    <HashLink className='nav-link the-link text-white fs-5' to="/projects">Projects</HashLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default AppNavbar;