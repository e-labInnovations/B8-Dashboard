import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

function Page404() {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.main}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              404
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              Page Not Found
            </Typography>
            <Typography variant='body2' component='p'>
              The page you are looking for does not exist. Sorry{' '}
              <SentimentVeryDissatisfiedIcon />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' component={Link} to='/'>
              Home Page
            </Button>
          </CardActions>
        </Card>
      </main>
    </div>
  );
}

export default Page404;
