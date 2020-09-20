import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cont: {
        marginTop: '8rem'
    },
    rightBox: {
        marginRight: '4rem',
        marginLeft: '4rem'
    },
}));

export default function Login() {
    const classes = useStyles();
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
    ));
    
    return (
        <>
            <Container className={classes.cont} maxWidth="lg">
                <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item xs={6}>
                        <Box>
                            <Typography variant='h3'>
                                Schedule Transfer
                            </Typography>
                            <Typography variant='subtitle1'>
                            <br/>
                            Welcome to Energy Transfer’s Natural Gas Liquids Export Terminal scheduling program. In order to generate an optimized dock usage schedule, please upload a CSV file with customer ID, month, product split, total volume, requested propane and butane volumes, and preferred arrival start and end dates listed.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.rightBox}>
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                <Button variant="contained" color="primary" fullWidth={true}>Upload inputs</Button>
                            </div>
                            <aside>
                                <h4>Files</h4>
                                <ul>{files}</ul>
                            </aside>
                            <br />
                            <Button variant="contained" color="primary" fullWidth={true} component={Link} to='/loading'>Go!</Button>
                        </Box>
                        
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}