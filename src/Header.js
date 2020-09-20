import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: '6rem'
  },
  logoBox: {
      marginLeft: '4rem',
      marginTop: '2rem'
  }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <>
          <Box display="flex" flexDirection="row" className={classes.logoBox}>
              <Link to='/'><img src={logo} className={classes.logo} alt="logo" /></Link>
          </Box>
        </>
    );
}