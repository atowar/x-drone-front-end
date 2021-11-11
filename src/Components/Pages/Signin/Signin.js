import useAuth from '../../../Hooks/useAuth';

import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import { NavLink, useLocation, useHistory } from 'react-router-dom';

// import login from '../../images/login.png'


const Signin = () => {
    const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();

    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault()
    }

    const handleGoogleSignIn =() => {
        googleSignIn(location, history)
    }

    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <br />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />

                        <Button sx={{ width: '75%' }} type="submit" variant='contained'>Login</Button>
                        <NavLink to="/signup"><Button
                            style={{ textDecoration: 'none' }}
                            variant="text">New User? Please Sign Up
                        </Button>

                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user.email && <Alert severity="success">Successfully Registered!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Button 
                            onClick = {handleGoogleSignIn}
                            sx={{ width: '75%' }}
                            style={{ textDecoration: 'none' }}
                            variant="contained">Google Sign In
                        </Button>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid> */}
            </Grid>
        </Container>
    );
};


export default Signin;