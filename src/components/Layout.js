import React from 'react';
import GridList from '@material-ui/core/GridList';

//renders things straight in the middle of the page
export const Layout = (props) => (
<GridList>
    {props.children}
</GridList>
)
