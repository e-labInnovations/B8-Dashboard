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

const ProfileDialog = ({openProfileDialog, handleProfileDialogClose, openProfileObj }) => {
    return (
        <div>
            <Dialog
                open={openProfileDialog}
                onClose={() => handleProfileDialogClose()}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>{openProfileObj.name}</DialogTitle>
                <DialogContent>
                <img
                    src={openProfileObj.profile_pic}
                    alt={openProfileObj.name}
                    width='100%'
                    height='auto'
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={() => handleProfileDialogClose()} color='primary'>
                    Close
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ProfileDialog
