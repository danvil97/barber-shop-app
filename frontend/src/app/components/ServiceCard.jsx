import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ServiceCard = ({ _id, image, name, description, price }) => {
  const classes = useStyles();

  return (
    <Grid item key={_id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={image} title={name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {price > 0 ? `${price} ₽` : 'Free'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

ServiceCard.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number,
};

ServiceCard.defaultProps = {
  image:
    'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1732584287.jpg',
  description: '',
  price: 0,
};

export default ServiceCard;
