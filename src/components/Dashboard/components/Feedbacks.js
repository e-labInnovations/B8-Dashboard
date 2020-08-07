import React, { useEffect, useState } from 'react';
import {
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
  },
  inline: {
    display: 'inline',
  },
});

const dateFormate = (date) => {
  var d = new Date(date);
  let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
  let day = d.getDate();
  let monthIndex = d.getMonth();
  let monthName = monthNames[monthIndex];
  let year = d.getFullYear();

  return `${day}-${monthName}-${year}`; 
}

const Feedbacks = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbyJCw-SQlthY4K2w0zz9HFuYU2GhNu8YVAsKHc6lTxegw5_N9QX/exec?action=read'
      )
      .then((res) => {
        setFeedbacks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
    //eslint-disable-next-line
  }, []);

  return loading !== true ? (
    <div>
      <h3>Feedbacks/Helps </h3>

      <List className={classes.root}>
        {feedbacks.reverse().map((feedback, index) => {
          return (
            <div key={feedback.date + index}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt={feedback.name}
                    src={'https://ui-avatars.com/api/?name=' + feedback.name}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={feedback.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        {feedback.class + ' - ' + dateFormate(feedback.date)}
                      </Typography><br />
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        {feedback.phone}
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
    </div>
  ) : (
    <div id='loader'>
      <CircularProgress />
    </div>
  );
};

export default Feedbacks;
