import React, {useState, useEffect} from 'react';
import { Typography, Paper, Avatar, Button, CircularProgress, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import firebase from '../../firebase';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

const Profile = (props) => {
	const { classes } = props
  const logout = props.logout
  var user = firebase.auth.currentUser
  const [profile, setProfile] = useState({"admission_no":"","division":"TEACHER","name":"Admin","phone":"8089931063","profile_pic":"https://ui-avatars.com/api/?name=Admin"})
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    firebase.database
      .ref('users/' + user.uid)
      .once('value')
      .then((snapShot) => {
        setProfile(snapShot.val());
      });
  })

  const changePassword = () => {
    if (password === '') {
      alert('Enter a password')
    } else {
      user.updatePassword(password).then(() => {
        // Update successful.
        logout()
        alert('Password changed successfully')
      }).catch((error) => {
        // An error happened.
        alert(error)
      });
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return profile ? (
    <div>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} alt={profile.name} src={profile.profile_pic} />
        <Typography component="h1" variant="h5">
          Hello {profile.name}!
        </Typography>
        
        <Typography>
          Email: {user.email}
        </Typography>
        <Typography>
          Mobile Number: {profile.phone}
        </Typography>

        <br />

        <div>
          <InputLabel htmlFor="password">New Password</InputLabel>
          <Input
            fullWidth
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={changePassword}
            className={classes.submit}>
            Change Password
          </Button>
        </div>
      </Paper>
    </div>
  ):(
    <div id='loader'>
      <CircularProgress />
    </div>
  );
}

export default withStyles(styles)(Profile);
