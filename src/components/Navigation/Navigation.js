import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';
import Symbol from './coronavirus-24px.svg';

const Navigation = () => {
    return (

        <Navbar expand='lg'>
         
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Navbar.Brand href="/"><img src={Symbol} alt=''/>COVIZ</Navbar.Brand>
                    
                    <Nav.Link href="/trends">TRENDS</Nav.Link>
                    <Nav.Link href="/compare">COMPARISONS</Nav.Link>
                    <Nav.Link href="/predict">PREDICTIONS</Nav.Link>
                    <Nav.Link href="/about">PRODUCT</Nav.Link>
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}

export default Navigation
