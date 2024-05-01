import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const SignIn = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://52.65.143.166:5000/login', { email, password }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // Allow requests from any origin
            }
        })
            .then(() => {
                setLoggedIn(true);
                alert("login sucessfully")
                navigate('/');
            })
            .catch((error) => {
                alert("invalid user")
                setEmail('')
                setPassword('')
                console.log('Login failed:', error);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://wallpapercave.com/wp/wp13857846.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}

                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} style={{ marginTop: "75px" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            Sign in
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }} >
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                                variant="standard"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 1, width: '100%' }} // Align text fields horizontally and set width to 100%
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                variant="standard"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 1, width: '100%' }} // Align text fields horizontally and set width to 100%
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleLogin}
                            >
                                Sign In
                            </Button>
                            <Grid container>

                                <Grid item>
                                    <Link to='/signup'>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default SignIn;
