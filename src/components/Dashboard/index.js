import React, { useEffect, useState } from 'react';
import {
  Typography,
  Avatar,
  CircularProgress,
  Button,
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';
import Layout from './components/Layout';
import Videos from './components/Videos';
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

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert('Please login first');
    props.history.replace('/login');
    return null;
  }

  const [news, setNews] = useState('');

  useEffect(() => {
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

  return (
    <main className={classes.main}>
      <Router>
        <Switch>
          <Route
            exact
            path='/dashboard'
            render={() => (
              <Layout logout={logout}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='news'>Flash News</InputLabel>
                  <Input
                    name='news'
                    type='text'
                    id='news'
                    autoComplete='off'
                    value={news}
                    onChange={(e) => setNews(e.target.value)}
                    multiline
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    onClick={updateNews}
                    className={classes.submit}
                  >
                    Update
                  </Button>
                </FormControl>
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
            path='/dashboard/tip videos'
            render={() => (
              <Layout logout={logout}>
                <Videos Tag='Ninetizen' />
              </Layout>
            )}
          />
          <Route
            exact
            path='/dashboard/follow up videos'
            render={() => (
              <Layout logout={logout}>
                <Videos Tag='Follow up' />
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
