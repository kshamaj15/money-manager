import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react';
import './LogSignIn.scss';
import { Button, Container, Divider, Grid } from '@material-ui/core';
import Form from './shared/Form';

import useStyles from './style';
import fb from '../assets/facebook.svg';
import gg from '../assets/google.svg';

const LogSignIn = props => {

    const classes = useStyles();

    const [tabIndex, setTabIndex] = useState(0);
    const [loginFields] = useState([
        { type: 'text', name: 'Email/Username', required: true },
        { type: 'password', name: 'Password', required: true }
    ]);
    const [signinFields] = useState([
        { type: 'text', name: 'Full Name', required: true },
        { type: 'email', name: 'Email', required: true },
        { type: 'password', name: 'Set Password', required: true },
        { type: 'password', name: 'Confirm Password', required: true },
    ]);

    const handleChange = (e, newV) => {
        console.log(newV);
        setTabIndex(newV);
    }

    return (
        <div className={classes.LogSignIn}>
            <AppBar position="static">
                <Tabs value={tabIndex} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Sign Up" />
                    <Tab label="Log In" />
                </Tabs>
            </AppBar>
            <Container className={classes.form}>
                <Grid className={classes.formField}><Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    size="small">
                    <img className={classes.comLogo} height="25rem" src={gg} alt="gg" />
                    {(tabIndex === 0) ? 'Signup' : 'Login'} with Google
                </Button></Grid>
                <Grid className={classes.formField}><Button
                    className={classes.actionButton}
                    variant="outlined"
                    color="primary"
                    size="small">
                    <img className={classes.comLogo} height="25rem" src={fb} alt="fb" />
                    {(tabIndex === 0) ? 'Signup' : 'Login'} with Facebook
                </Button></Grid>
                <Grid className={classes.divider}>
                    <Divider />OR<Divider />
                </Grid>
                {(tabIndex === 0) ?
                    <Form fields={signinFields} formSubmitLabel="Sign Up" /> :
                    <Form fields={loginFields} formSubmitLabel="Log In" />}
            </Container>
        </div>
    )
}

export default LogSignIn;
