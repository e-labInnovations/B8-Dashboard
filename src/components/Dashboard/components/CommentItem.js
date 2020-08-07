import React from 'react';
import {
  Typography,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from '@material-ui/core';

const CommentItem = ({
  classes,
  comment,
  index,
  handleProfileDialogClickOpen,
  handleCommentDialogClickOpen,
}) => {
  return (
    <div key={comment.date + index}>
      <ListItem
        alignItems='flex-start'
        button
        onClick={() =>
          handleCommentDialogClickOpen
            ? handleCommentDialogClickOpen(comment)
            : null
        }
      >
        <ListItemAvatar>
          <Avatar
            alt={comment.name}
            src={comment.profile_pic}
            onClick={() =>
              handleProfileDialogClickOpen
                ? handleProfileDialogClickOpen(comment)
                : null
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary={comment.name}
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                {comment.date}
              </Typography>
              <br />
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                {'9 ' + comment.division + '  Admi_NO: ' + comment.admission_no}
              </Typography>
              <br />
              {comment.comment}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </div>
  );
};

export default CommentItem;
