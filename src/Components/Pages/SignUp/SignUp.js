import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

// import login from '../../../images/login.png'


const SignUp = () => {


    const {user, authError, registerUser, isLoading } = useAuth();

    const [loginData, setLoginData] = useState({});
   const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        
        if (loginData.password !== loginData.password_confirm) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                type="name"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
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

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Re-type Password"
                                type="password"
                                name="password_confirm"
                                onBlur={handleOnBlur}
                                autoComplete="current_password"
                                variant="standard"
                            />

                            <Button sx={{ bgcolor: 'error.main', width: '75%' }} type="submit" variant='contained'>Register</Button>
                            <NavLink to="/signin"><Button 
                                style={{ textDecoration: 'none' }}
                                variant="text">Already Registered? Please SignIn
                            </Button>

                            </NavLink>
                        </form>

                    }

                    {isLoading && <CircularProgress />    }
                                        
                    {user.email && <Alert severity="success">Successfully Registered!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid> */}
            </Grid>
        </Container>
    );
};


export default SignUp;