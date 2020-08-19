import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #fcfcfc;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbbb;
    

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Marcela's Website</Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href="/"> Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about"> About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/otherideas"> Other Ideas</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/illustrations"> Illustrations</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/curriculumdesigns"> Curriculum Designs </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"> Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)