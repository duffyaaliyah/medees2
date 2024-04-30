import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "./AuthService";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
const AuthRegister = () => {
  const navigate = useNavigate();
//state to store user registration data 
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contr_uid: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
          navigate("/");
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);
//Handler to update state when input changes 
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };
//Handler for registration submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  // Material UI used to improve the look of the Register page
  return (
  
  <ThemeProvider theme={defaultTheme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box component="form" noValidate onSubmit={onSubmitHandler} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={newUser.firstName}
                onChange={onChangeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={newUser.lastName}
                  onChange={onChangeHandler}
                />
              </Grid>
           <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={newUser.email}
          onChange={onChangeHandler}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={newUser.password}
                onChange={onChangeHandler}
        />
        <TextField
          required
          fullWidth
          name="UID"
          label="UID"
          type="UID"
          id="UID"
          autoComplete="new-UID"
          value={newUser.contr_uid}
                onChange={onChangeHandler}
        />
</Grid>
</Grid> 
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/auth/login" variant="body2">
              {"Already have an account? Log In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
</ThemeProvider>
);
};

export default AuthRegister;
