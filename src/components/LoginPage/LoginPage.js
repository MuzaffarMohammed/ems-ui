import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import {useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../CopyrightComponent/CopyrightComponent';
import onLoginSubmitAction from '../../actions/login/onLoginSubmitAction';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    userName: '',
    password: ''
});
const { userName, password } = inputs;
const location = useLocation();
const dispatch = useDispatch();

const handleChange = (e) =>{
  const { name, value } = e.target;
  setInputs(inputs => ({ ...inputs, [name]: value })); 
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (userName && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/home" } };
      dispatch(onLoginSubmitAction(userName, password, from));
  }
}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="userName"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" 
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick = {handleSubmit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
