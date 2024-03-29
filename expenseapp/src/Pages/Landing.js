import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from '../Components/Header';
import PlaceToVisit from "../Components/PlaceToVisit"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/main.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Landing = () => {
  
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        
        <PlaceToVisit />
      </div>
    );
}

export default Landing;