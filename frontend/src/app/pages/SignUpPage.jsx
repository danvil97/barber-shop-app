import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

import { signUp, userSelector } from '../features/user';

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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpPage = () => {
  const classes = useStyles();

  const { isLoading } = useSelector(userSelector);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    formState: { dirtyFields },
  } = useForm({ mode: 'all' });
  const onSubmit = (data) => {
    dispatch(signUp(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="First Name"
                name="name"
                fullWidth
                autoFocus
                inputRef={register({
                  required: true,
                  maxLength: { value: 20, message: 'Must be less then 20' },
                })}
                helperText={errors.name ? errors.name.message : null}
                error={!!errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                label="Last Name"
                name="lastName"
                inputRef={register({
                  required: true,
                  maxLength: { value: 20, message: 'Must be less then 20' },
                })}
                helperText={errors.lastName ? errors.lastName.message : null}
                error={!!errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Address"
                name="email"
                inputRef={register({
                  required: true,
                  pattern: { value: /^.+@.+\..+$/, message: 'Must be valied email' },
                })}
                helperText={errors.email ? errors.email.message : null}
                error={!!errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile Phone"
                name="phone"
                inputRef={register({ required: true })}
                helperText={errors.phone ? errors.phone.message : null}
                error={!!errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                inputRef={register({
                  required: true,
                  minLength: { value: 6, message: 'Must be more then 6 characters' },
                })}
                helperText={errors.password ? errors.password.message : null}
                error={!!errors.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={
              Object.keys(errors).length !== 0 || Object.keys(dirtyFields).length !== 5 || isLoading
            }
          >
            {isLoading ? <CircularProgress size={24} /> : 'Sign Up'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/signin">
                <Typography variant="body2">Already have an account? Sign in</Typography>
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUpPage;
