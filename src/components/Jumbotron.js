import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

//need this so Jumbotron doesn't error
//jumbo matches below, overlay matches below as well in functional components
const Styles = styled.div`
.jumbo{
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2; 
}

.overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1
}
`;
//functional components
export const Jumbotron = () => (
<Styles>
    <Jumbo fluid className="jumbo">
        <div className = "overlay"></div>
        <Container>
            <h1>Welcome</h1>
        </Container>
    </Jumbo>
</Styles>
)