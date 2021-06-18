import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 8,
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          सोलापूर तालुका पोलीस ठाणे
        </Typography>
        {/* <br></br> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          ASI
        </Typography> */}
        <hr/>

        <Typography variant="body2" component="p">
          ASI: -3
        </Typography>
        <Typography variant="body2" component="p">
          PC: 3
        </Typography>
        <Typography variant="body2" component="p">
          PN: 2
        </Typography>
        <Typography variant="body2" component="p">
          HC: -1
        </Typography>
        <hr/>
        <Typography gutterBottom variant="h5" component="h2">
          TOTAL: -1
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
