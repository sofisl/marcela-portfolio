import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  img: { 
    maxWidth:'100%',
    maxHeight: '100%', 
    padding: '3rem',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  }, 
  h3: {
    lineHeight: '40px',
    height: '10px',
    textAlign: 'center',
    fontFamily: "'Raleway', sans-serif"
  },
  p: { 
      lineHeight: '10px',
      height: '5px',
      textAlign: 'center',
      paddingTop: '40px',
      fontFamily: "'Raleway', sans-serif"
  }
}));



 export const Contact = () => {
  const classes = useStyles();

  return (  
    <div>
        <img className={classes.img} src={require("./assets/desert.png")} alt="desert"/>
        <h3 className={classes.h3}>CONTACT ME</h3>
        <p className={classes.p}><a href="mailto:marcelaiannini@gmail.com?Subject=I'm%20Interested%20In%20Connecting%20About%20Your%20Website">marcelaiannini@gmail.com</a></p>
        <p className={classes.p}><a href="https://www.linkedin.com/in/marcelaiannini">Connect with me on LinkedIn</a></p>
        <p className={classes.p}>(888) 888-8888</p>
    </div>
  );
}