import React from 'react';
import { Container } from 'react-bootstrap';

//renders things straight in the middle of the page
export const Layout = (props) => (
<Container>
    {props.children}
</Container>
)
