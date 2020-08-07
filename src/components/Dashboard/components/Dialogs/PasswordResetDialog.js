import React from 'react'
import {
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const PasswordResetDialog = ({openPRDialog, handlePRDialogClose, email, setEmail, handleSentPRE}) => {
    return (
        <div>
            <Dialog
                open={openPRDialog}
                onClose={() => handlePRDialogClose()}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>Reset Password</DialogTitle>
                <DialogContent>
                  <Typography gutterBottom variant='p'>
                    A reset password email send to your email acccount
                  </Typography>
                <FormControl fullWidth>
                  <InputLabel htmlFor='email'>Email</InputLabel>
                  <Input
                    name='Email'
                    type='text'
                    id='email'
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    multiline
                  />
                </FormControl>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => handlePRDialogClose()} color='primary'>
                    Close
                </Button>
                <Button onClick={() => handleSentPRE()} color='primary'>
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PasswordResetDialog
