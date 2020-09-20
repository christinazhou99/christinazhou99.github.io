import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import loadingGif from './oilRig.gif';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '3rem'
    },
    pic: {
        marginTop: '1rem',
        width: '50rem'
    }
}));

window.onload = function() {
    setTimeout(function() { window.location.href = '/results'; }, 5000);
};

export default function Loading() {
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
          history.push('/results');
        }, 3000);
        return () => clearTimeout(timer);
    }, [history]);

    return (
        <Container className={classes.cont}>
            <Typography variant='h4'>Creating an optimal schedule...</Typography>
            <hr />
            <img src={loadingGif} className={classes.pic} alt="loading"></img>
        </Container>
    )
}