import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Raleway:ital,wght@0,500;1,500&display=swap');    
img { 
  max-width:75%; 
  height: auto; 
  float: left;
  padding: 3rem;
} 
h3 {
  line-height: 50px;
  height: 10px;
  text-align: center;
  padding-top: 50px;
  padding-left: 30px;
  font-family: 'Raleway', sans-serif;
}
p { 
    line-height: 50px;
    height: 10px;
    text-align: center;
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    font-family: 'Raleway', sans-serif;
}
`;


const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis magna vel luctus dapibus. Proin porttitor non neque nec aliquam. Nulla vehicula quam non rhoncus lacinia. Phasellus vel mattis ipsum, eget aliquam velit."
export const Lake = () => (
  <Styles>
  <div>
  <img src={require("./assets/lake.jpg")} alt="1"/>
  <h3>LAKE</h3>
  <p>{text}</p>
  </div>
</Styles>
)