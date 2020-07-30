import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
.container {
  height: 90vh;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px 10px; 
}
.cell {
  color: white;
  font-size: 3rem;
  text-align: center;
  padding: 4rem;
}
img { 
  max-width:100%; 
  height:auto; 
} 
`;

export const SeventhPage = () => (
  <Styles>
  <div class="container">
  <img class="cell" src={require("./assets/tornado.jpg")} alt="1"/>
  </div>
</Styles>
)