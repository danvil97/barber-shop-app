/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import ServiceCard from './ServiceCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const ServicesList = ({ services }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {services.map(({ _id, image, name, description, price }) => (
            <ServiceCard
              _id={_id}
              image={image}
              name={name}
              description={description}
              price={price}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

ServicesList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

ServicesList.defaultProps = {
  services: [],
};

export default ServicesList;
