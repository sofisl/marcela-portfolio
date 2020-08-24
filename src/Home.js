import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import desert from './assets/desert.png';
import forest from './assets/forest.jpg';
import galaxy from './assets/galaxy.jpg';
import hotsprings from './assets/hotsprings.jpg';
import lake from './assets/lake.jpg';
import milkyway from './assets/milkyway.jpg';
import tornado from './assets/tornado.jpg';
import snowymountains from './assets/snowymountains.jpg';
import mountains from './assets/mountains.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    flexWrap: 'wrap',  
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100vw',
    height: '100vh',
    padding: '1rem',

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  }
}));


 const tileData = [
   {
     img: desert,
     link: 'desert',
     title: 'DESERT',
     author: 'author',
   },
   {
    img: forest,
    link: 'forest',
    title: 'FOREST',
    author: 'author',
  },
  {
    img: snowymountains,
    link: 'snowymountains',
    title: 'SNOWY MOUNTAINS',
    author: 'author',
  },
  {
    img: mountains,
    link: 'mountains',
    title: 'MOUNTAINS',
    author: 'author',
  },
  {
    img: lake,
    link: 'lake',
    title: 'LAKE',
    author: 'author',
  },
  {
    img: galaxy,
    link: 'galaxy',
    title: 'GALAXY',
    author: 'author',
  },
  {
    img: hotsprings,
    link: 'hotsprings',
    title: 'HOT SPRINGS',
    author: 'author',
  },
  {
    img: milkyway,
    link: 'milkyway',
    title: 'MILKY WAY',
    author: 'author',
  },
  {
    img: tornado,
    link: 'tornado',
    title: 'TORNADO',
    author: 'author',
  },
 ];


export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <Link to={"/"+tile.link}> 
            <GridListTileBar
              title={tile.title}
            />    
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import GridList from '@material-ui/core/GridList';

// //TODO: figure out how to expand containers to full page
// const Styles = styled.div`
// *{
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
// }
// .container {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   grid-gap: 10px;
//   background-color: #fcfcfc;
//   width: 100vw;
//   height: 100vh;
// }
// .cell {
//   padding: 0.5rem;
//   display: flex;
//   flex-flow: row wrap;
//   background-color: blue;  
// }
// img { 
//   object-fit: cover;
//   width: 100%;
//   max-height: 100%;
// } 
// `;

// export const Home = () => (
//   <Styles>
//   <div class="container">
//  <Link to='/firstPage'> 
//   <img class="cell" src={require("./assets/desert.png")} alt="1"/>
//   </Link>
//   <Link to='/secondPage'> 
//   <img class="cell" src={require("./assets/forest.jpg")} alt="1" />
//   </Link>
//   <Link to='/thirdPage'> 
//   <img class="cell" src={require("./assets/galaxy.jpg")} alt="1" />
//   </Link>
//   <Link to='/fourthPage'> 
//   <img class="cell" src={require("./assets/hotsprings.jpg")} alt="1" />
//   </Link>
//   <Link to='/fifthPage'> 
//   <img class="cell" src={require("./assets/lake.jpg")} alt="1"/>
//   </Link>
//   <Link to='/sixthPage'> 
//   <img class="cell" src={require("./assets/milkyway.jpg")} alt="1"/>
//   </Link>
//   <Link to='/seventhPage'> 
//   <img class="cell" src={require("./assets/tornado.jpg")} alt="1"/>
//   </Link>
//   <Link to='/eighthPage'> 
//   <img class="cell" src={require("./assets/snowymountains.jpg")} alt="1"/>
//   </Link>
//   <Link to='/ninthPage'> 
//   <img class="cell" src={require("./assets/mountains.jpg")} alt="1" />
//   </Link>
// </div>
// </Styles>
// )

