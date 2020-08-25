import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    flexWrap: 'wrap',  
    overflow: 'hidden',
  },
  gridList: {
    width: '100vw',
    height: '80vh',
    padding: '5rem',
  },
  h3: {
    lineHeight: '50px',
    height: '10px',
    textAlign: 'center',
    paddingTop: '50px',
    paddingLeft: '30px',
    fontFamily: "'Raleway', sans-serif"
  },
  p: { 
      lineHeight: '50px',
      height: '10px',
      textAlign: 'center',
      paddingTop: '50px',
      paddingLeft: '100px',
      paddingRight: '100px',
      fontFamily: "'Raleway', sans-serif"
  }
}));


 const tileData = [
    {src:"https://docs.google.com/document/d/e/2PACX-1vTL7pYlbf3N7GP3NmcqWhKpp2FYK-WumxRlvIVqmv3AwBDPOnBfUrBpfdSdlgmA6CWctzl-vdR95mnX/pub?embedded=true",title: "CURRICULUM DESIGN 1"},
    {src:"https://docs.google.com/document/d/e/2PACX-1vTerg84pTKrO4vUsFX16l4ye03SPLFRocjOutcJW2EweP2v22QrJn5TM8VRDlEbXn1g9NFP6W5a84o1/pub?embedded=true",title: "CURRICULUM DESIGN 2"}
 ];

 const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis magna vel luctus dapibus. Proin porttitor non neque nec aliquam. Nulla vehicula quam non rhoncus lacinia. Phasellus vel mattis ipsum, eget aliquam velit."

 export const CurriculumDesigns = () => {
  const classes = useStyles();

  return (  
    <div className={classes.root}>
        <h3 className={classes.h3}>CURRICULUM DESIGNS</h3>
        <p className={classes.p}>{text}</p>
      <GridList cellHeight={500} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.title}>
            <iframe src={tile.src} title={tile.title} height="100%" width="100%"></iframe>
            <GridListTileBar
              title={tile.title}
            />    
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// const Styles = styled.div`
// @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@100&family=Raleway:ital,wght@0,500;1,500&display=swap');    
// iframe { 
//     max-width:40%; 
//     max-height: 40%; 
//     float: left;
//     padding: 3rem;
//   } 
//   h3 {
//     line-height: 50px;
//     height: 10px;
//     text-align: center;
//     padding-top: 50px;
//     padding-left: 30px;
//     font-family: 'Raleway', sans-serif;
//   }
//   p { 
//       line-height: 50px;
//       height: 10px;
//       text-align: center;
//       padding-top: 50px;
//       padding-left: 30px;
//       padding-right: 30px;
//       font-family: 'Raleway', sans-serif;
//   }
// `;

// export const CurriculumDesigns = () => (
//     <Styles>
//         <div>
//         <iframe src="https://docs.google.com/document/d/e/2PACX-1vTL7pYlbf3N7GP3NmcqWhKpp2FYK-WumxRlvIVqmv3AwBDPOnBfUrBpfdSdlgmA6CWctzl-vdR95mnX/pub?embedded=true" title="CURRICULUM DESIGN 1" height="100%" width="50%" ></iframe>    
//         <p></p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <iframe src="https://docs.google.com/document/d/e/2PACX-1vTerg84pTKrO4vUsFX16l4ye03SPLFRocjOutcJW2EweP2v22QrJn5TM8VRDlEbXn1g9NFP6W5a84o1/pub?embedded=true" title="CURRICULUM DESIGN 2" height="100%" width="50%" ></iframe>
//         </div>
//     </Styles>
// )