import React from 'react'
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Tabs,
  Tab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
} from '@material-ui/core';
import CommentItem from '../CommentItem'

const CommentDialog = ({openCommentDialog, handleCommentDialogClose, openCommentObj, classes, handleDeleteComment}) => {
    return (
        <div>
            <Dialog
                open={openCommentDialog}
                onClose={() => handleCommentDialogClose()}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>{openCommentObj.name}</DialogTitle>
                <DialogContent>
                <List className={classes.root}>
                    <CommentItem
                    classes={classes}
                    comment={openCommentObj}
                    index={0}
                    handleProfileDialogClickOpen={null}
                    />
                </List>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => handleCommentDialogClose()} color='primary'>
                    Close
                </Button>
                <Button onClick={() => handleDeleteComment(openCommentObj)} color='primary'>
                    Delete
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CommentDialog
