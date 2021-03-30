import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  mainButtons: {
    marginTop: theme.spacing(4),
  },
  linkButton: {
    textDecoration: 'none',
  },
}));

const MainPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Get a haircut!
        </Typography>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          💈
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Мы классный барбершоп. У нас есть куча полезных услуг, которые могут понадобиться тебе! А
          ну скорее регистрируйся и записывайся к нам!
        </Typography>
        <div className={classes.mainButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/services" className={classes.linkButton}>
                <Button variant="contained" color="primary">
                  Look at our services
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
