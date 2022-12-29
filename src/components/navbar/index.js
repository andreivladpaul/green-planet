import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand as={NavLink} to={'/'}>
                        <h3>Green Planet</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={NavLink} to={'/'} style={{ color: '#7AB66F' }}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={'temperature'}>
                                Temperature
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={'co2'}>
                                Co2
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={'methane'}>
                                Methane
                            </Nav.Link>
                            <Nav.Link as={NavLink} to={'nitrous-oxide'}>No2</Nav.Link>
                            <Nav.Link as={NavLink} to={'arctic'}>Polar Ice</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation