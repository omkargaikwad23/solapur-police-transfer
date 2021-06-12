import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 175,
    margin: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  viewBtn: {
    fontSize: 14,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
  },
});

export default function OtherStation() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          सोलापूर तालुका पोलीस ठाणे
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}Empty Posts: 10
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        {/* <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography> */}
      </CardContent>
      <CardActions className={classes.viewBtn}>
        <Button size="small">अधिक पहा</Button>
      </CardActions>
    </Card>
  );
}
