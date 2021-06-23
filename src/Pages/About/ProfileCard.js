import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
//import { shadows } from '@material-ui/system';
//import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles({
  root: {
    width: 230,
    height: 378,
    margin: 6,
    borderRadius: 8
  },
  link: {
    spacing: 8,
    margin: 4
  },
  cardMedia: {
    // paddingTop: '81.25%',
    borderRadius: '50%',
    padding: '24px',
    height: '230px',
    width: '230px',
    alignContent: 'center'
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', text: 'center', }}>
      <Card elevation={4} className={classes.root}>
      <Box>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt="img"
          image="/images/rushi.jpg"
          title="Ruhshikesh Korade"
        />
        {/* <Avatar alt="Remy Sharp" src="/images/rushi.jpg" className={classes.large} /> */}
        <CardContent style={{backgroundColor: 'lightblue'}}>
          <Typography gutterBottom variant="h6">
            Ruhshikesh Korade
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            +91 98238 03381
          </Typography>
          <Link href="https://github.com/RK-001" className={classes.link} target="_blank" >
            <GitHubIcon/>
          </Link>
          <Link href="https://www.linkedin.com/in/koraderushikesh" target="_blank" className={classes.link} >
            <LinkedInIcon/>
          </Link>
          <Link href="https://www.instagram.com/_rk.001_/" target="_blank" className={classes.link}>
            <InstagramIcon/>
          </Link>
          <Link href="#" onClick={{}}>
           <Typography variant="subtitle2">
            rskorade.001@gmail.com
           </Typography>
          </Link>
        </CardContent>
      </Box>
    </Card>

    <Card elevation={4} className={classes.root}>
      <Box>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt="img"
          image="/images/rohit.jpeg"
          title="Rohit Thakare"
        />
        <CardContent style={{backgroundColor: 'lightblue'}}>
          <Typography gutterBottom variant="h5" >
            Rohit Thakare
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            Full Stack Developer
          </Typography>
          <Link className={classes.link} target="_blank" href="https://github.com/root-Rohit007" >
            <GitHubIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.linkedin.com/in/rohit2000/">
            <LinkedInIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="#">
            <InstagramIcon/>
          </Link>
          <Link href="#" onClick={{mailTo: "omkargaikwad9552@gmail.com"}}>
           <Typography variant="subtitle2">
           thakarerohit.rt@gmail.com
           </Typography>
          </Link>
        </CardContent>
      </Box>
    </Card>

    <Card elevation={4} className={classes.root}>
      <Box>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt="img"
          image="/images/pushkar.jpeg"
          title="Pushkar Jain"
        />
        <CardContent style={{backgroundColor: 'lightblue'}}>
          <Typography gutterBottom variant="h5" >
            Pushkar Jain
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            Full Stack Developer
          </Typography>
          <Link className={classes.link} target="_blank" href="https://github.com/PushkarRJain">
            <GitHubIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.linkedin.com/in/pushkar-jain-3280581b0/" >
            <LinkedInIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.instagram.com/__pushkar_jain__/">
            <InstagramIcon/>
          </Link>
          <Link href="#" onClick={{mailTo: "omkargaikwad9552@gmail.com"}}>
           <Typography variant="subtitle2">
           prj20012016@gmail.com
           </Typography>
          </Link>
        </CardContent>
      </Box>
    </Card>

    <Card elevation={4} className={classes.root}>
      <Box>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt="img"
          image="/images/gayatri.jpg"
          title="Gayatri Godbole"
        />
        <CardContent style={{backgroundColor: 'lightblue'}}>
          <Typography gutterBottom variant="h5" >
            Gayatri Godbole
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            Full Stack Developer
          </Typography>
          <Link className={classes.link} target="_blank" href="https://github.com/gayatri2">
            <GitHubIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.linkedin.com/in/gayatri-godbole-b1a0471b6/">
            <LinkedInIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.instagram.com/gayatri_godbole/">
            <InstagramIcon/>
          </Link>
          <Link href="#" onClick={{mailTo: "omkargaikwad9552@gmail.com"}}>
           <Typography variant="subtitle2">
            gayatri.godbole02@gmail.com
           </Typography>
          </Link>
        </CardContent>
      </Box>
    </Card>

    <Card elevation={4} className={classes.root}>
      <Box>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt="img"
          image="/images/omkar.jpeg"
          title="Omkar Gaikwad"
        />
        <CardContent style={{backgroundColor: 'lightblue'}}>
          <Typography gutterBottom variant="h5" >
            Omkar Gaikwad
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            Full Stack Developer
          </Typography>
          <Link className={classes.link} target="_blank" href="https://github.com/omkargaikwad-23">
            <GitHubIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.linkedin.com/in/omkargaikwad23/">
            <LinkedInIcon/>
          </Link>
          <Link className={classes.link} target="_blank" href="https://www.instagram.com/omkar.gaikwad._/">
            <InstagramIcon/>
          </Link>
          <Link href="#" onClick={{mailTo: "omkargaikwad9552@gmail.com"}}>
           <Typography variant="subtitle2">
            omkargaikwad9552@gmail.com
           </Typography>
          </Link>
        </CardContent>
      </Box>
    </Card>
    </div>
  );
}
