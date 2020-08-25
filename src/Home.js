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
import snowymountains from './assets/snowymountains.jpg';
import mountains from './assets/mountains.jpg';
import { Link } from 'react-router-dom';

//TODO: Make squares/uneven gridlist vs. rectangles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    flexWrap: 'wrap',  
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '40vw',
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


