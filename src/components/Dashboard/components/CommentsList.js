import React from 'react';
import {
  Typography,
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  FormControl,
  Paper,
  InputBase,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CommentItem from './CommentItem';

const CommentsList = ({
  classes,
  comment,
  setComment,
  comments,
  handleProfileDialogClickOpen,
  handleNewComment,
  handleCommentDialogClickOpen,
}) => {
  return (
    <div>
      <Paper className={classes.root2}>
        <FormControl margin='normal' required fullWidth>
          <InputBase
            value={comment}
            autoComplete='off'
            className={classes.input}
            placeholder='Post new comment'
            onChange={(e) => setComment(e.target.value)}
            multiline
          />
        </FormControl>
        <Divider className={classes.divider} orientation='vertical' />
        <IconButton
          color='primary'
          className={classes.iconButton}
          aria-label='directions'
          onClick={() => handleNewComment()}
        >
          <SendIcon />
        </IconButton>
      </Paper>
      <List className={classes.root}>
        {comments.map((comment, index) => (
          <CommentItem
            classes={classes}
            comment={comment}
            index={index}
            handleProfileDialogClickOpen={handleProfileDialogClickOpen}
            handleCommentDialogClickOpen={handleCommentDialogClickOpen}
          />
        ))}
      </List>
    </div>
  );
};

export default CommentsList;
