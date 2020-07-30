import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//TODO: figure out how to expand containers to full page
const Styles = styled.div`
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
.cell {
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  background-color: blue;  
}
img { 
  object-fit: cover;
  width: 100%;
  max-height: 100%;
} 
`;

export const Home = () => (
  <Styles>
  <div class="container">
 <Link to='/firstPage'> 
  <img class="cell" src={require("./assets/desert.png")} alt="1"/>
  </Link>
  <Link to='/secondPage'> 
  <img class="cell" src={require("./assets/forest.jpg")} alt="1" />
  </Link>
  <Link to='/thirdPage'> 
  <img class="cell" src={require("./assets/galaxy.jpg")} alt="1" />
  </Link>
  <Link to='/fourthPage'> 
  <img class="cell" src={require("./assets/hotsprings.jpg")} alt="1" />
  </Link>
  <Link to='/fifthPage'> 
  <img class="cell" src={require("./assets/lake.jpg")} alt="1"/>
  </Link>
  <Link to='/sixthPage'> 
  <img class="cell" src={require("./assets/milkyway.jpg")} alt="1"/>
  </Link>
  <Link to='/seventhPage'> 
  <img class="cell" src={require("./assets/tornado.jpg")} alt="1"/>
  </Link>
  <Link to='/eighthPage'> 
  <img class="cell" src={require("./assets/snowymountains.jpg")} alt="1"/>
  </Link>
  <Link to='/ninthPage'> 
  <img class="cell" src={require("./assets/mountains.jpg")} alt="1" />
  </Link>
</div>
</Styles>
)

