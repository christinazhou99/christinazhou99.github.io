import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const api = Axios.create({
    baseURL: 'https://testflask-289216.uc.r.appspot.com'
});
const headers = {
    'Content-Type': 'application/json'
}

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '3rem'
    },
}));

export default function Results() {
    const classes = useStyles();
    const [schedule, setSchedule] = useState("");
    
    useEffect(() => {
        api.get('/', {headers: headers})
        .then(res => {
            console.log("res: ");
            console.log(res);
            setSchedule(JSON.stringify(res.data, null, 2));
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, [])

    return (
        <Container maxWidth="lg" className={classes.cont}>
            Optimal schedule <br />
            <textarea cols="50" rows="35" value={schedule} />
        </Container>
    )
}