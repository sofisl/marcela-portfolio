import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Raleway:ital,wght@0,500;1,500&display=swap');    
.navbar {
        font-family: 'Raleway', sans-serif;
    }

    .navbar-nav, .nav-link {
        font-family: 'Raleway', sans-serif;
    }    
    .title {
        font-family: 'Raleway', sans-serif;
        font-size: 65px;
        color: #473F3D;
    }
    .nav-title {
        font-family: 'Raleway', sans-serif;
        color:  #bbbb;
        font-size: 40px;
    }

    &:hover {
        color: #bbbb;
    }
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" >
        <Nav.Item><Nav.Link className = "title" href="/"> MARCELA IANNINI</Nav.Link></Nav.Item>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href="/about"> ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/"> ILLUSTRATIONS </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/curriculumdesigns"> CURRICULUM DESIGNS </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/otherideas"> OTHER IDEAS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"> CONTACT </Nav.Link></Nav.Item>    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)