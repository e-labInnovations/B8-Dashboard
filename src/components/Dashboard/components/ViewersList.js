import React from 'react';
import {
  Typography,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

const ViewersList = ({
  handleChangeSearch,
  divisions,
  division,
  classes,
  viewers,
  handleProfileDialogClickOpen,
}) => {
  return (
    <div>
      <InputLabel id='demo-simple-select-label'>Division</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={division}
        onChange={(e) => handleChangeSearch(e.target.value)}
      >
        {divisions.map((divi) => {
          return (
            <MenuItem key={divi} value={divi}>
              {divi}
            </MenuItem>
          );
        })}
      </Select>

      <List className={classes.root}>
        {viewers.map((viewer, index) => {
          return (
            <div key={viewer.uid}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    button
                    alt={viewer.name}
                    src={viewer.profile_pic}
                    onClick={() => handleProfileDialogClickOpen(viewer)}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={viewer.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        {viewer.date}
                      </Typography>
                      <br />
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        {'9 ' + viewer.division}
                      </Typography>
                      <br />
                      {'Admission NO: ' + viewer.admission_no}
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
  );
};

export default ViewersList;
