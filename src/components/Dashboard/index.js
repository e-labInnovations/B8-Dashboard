import React, { useEffect, useState } from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
  CircularProgress,
  Button,
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';
import Layout from './components/Layout';
import SolvedProblems from './SolvedProblems';
import Page404 from '../404/404';
import Feedbacks from './components/Feedbacks';
import Profile from './components/Profile';
import Register from '../Register'
import withStyles from '@material-ui/core/styles/withStyles';
import firebase from '../firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

const styles = (theme) => ({
  main: {},
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function Dashboard(props) {
  var path = props.match.url;
  const { classes } = props;
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert('Please login first');
    props.history.replace('/login');
    return null;
  }

  const [news, setNews] = useState('');

  useEffect(() => {
	  firebase.database
      .ref('problems/')
      .once('value')
      .then((snapShot) => {
        var testArray = [];
        snapShot.forEach((childSnapshot) => {
          var commObj = childSnapshot.val();
          var uid = commObj.uid;
            commObj.key = childSnapshot.key || '';
			if(!commObj.solved){
				testArray.push(commObj);
			}
        });
        setFeedbacks(testArray);
      });
    firebase.database
      .ref('flashNews/flashNews/newsLine')
      .once('value')
      .then((snapShot) => {
        setNews(snapShot.val());
      });
    //eslint-disable-next-line
  }, []);

  const updateNews = () => {
    firebase.database.ref('flashNews/flashNews/newsLine').set(news, (error) => {
      if (error) {
        alert(error);
      } else {
        alert('Updated');
      }
    });
  };
  
  const dateFormate = (date) => {
  var d = new Date(date);
  let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
  let day = d.getDate();
  let monthIndex = d.getMonth();
  let monthName = monthNames[monthIndex];
  let year = d.getFullYear();
  let houre = d.getHours();
  let minutes = d.getMinutes();

  return `${day}-${monthName}-${year} ${houre}:${minutes}`; 
}

  return (
    <main className={classes.main}>
      <Router>
        <Switch>
          <Route
            exact
            path='/dashboard'
            render={() => (
              <Layout logout={logout}>
                <List className={classes.root}>
        {feedbacks.map((feedback, index) => {
          return (
            <div key={feedback.time + index}>
              <ListItem alignItems='flex-start'>
                <ListItemText
                  primary={feedback.problem}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        {feedback.location + ' - ' + dateFormate(feedback.time)}
                      </Typography><br />
                      {feedback.message}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </div>
          );
        })}
      </List>
              </Layout>
            )}
          />
          <Route
            exact
            path='/dashboard/feedbacks'
            render={() => (
              <Layout logout={logout}>
                <Feedbacks />
              </Layout>
            )}
          />
          <Route
            exact
            path='/dashboard/SolvedProblems'
            render={() => (
              <Layout logout={logout}>
                <SolvedProblems Tag='Follow up' />
              </Layout>
            )}
          />
          <Route
            exact
            path='/dashboard/Profile'
            render={() => (
              <Layout logout={logout}>
                <Profile  logout={logout} />
              </Layout>
            )}
          />
          <Route
            exact
            path='/dashboard/register'
            render={() => (
              <Layout logout={logout}>
                <Register />
              </Layout>
            )}
          />
          <Route
            render={() => (
              <Layout logout={logout}>
                <Page404 />
              </Layout>
            )}
          />
        </Switch>
      </Router>
    </main>
  );

  async function logout() {
    await firebase.logout();
    props.history.push('/');
  }
}

export default withRouter(withStyles(styles)(Dashboard));
