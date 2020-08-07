import React, { useEffect, useState } from 'react';
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
import withStyles from '@material-ui/core/styles/withStyles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import firebase from '../../firebase';
import ViewersList from './ViewersList';
import CommentsList from './CommentsList';
import CommentItem from './CommentItem';
import CommentDialog from './Dialogs/CommentDialog'
import ProfileDialog from './Dialogs/ProfileDialog'

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
  },
  inline: {
    display: 'inline',
  },
  root2: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

const VideoDetails = ({ classes, users, video, goBack }) => {
  // const classes = useStyles();
  const [value, setValue] = useState(0);
  const [comments, setComments] = useState([]);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [viewersLocal, setViewersLocal] = useState([]);
  const [viewers, setViewers] = useState([]);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);
  const [openProfileObj, setOpenProfileObj] = useState({});
  const [division, setDivision] = useState('ALL');
  const [comment, setComment] = useState('');
  const [openCommentDialog, setOpenCommentDialog] = useState(false);
  const [openCommentObj, setOpenCommentObj] = useState({});

  const divisions = [
    'ALL',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'AA',
    'AB',
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AH',
    'AI',
    'AJ',
    'AK',
    'AL',
    'AM',
    'AN',
    'AO',
    'AP',
    'AQ',
    'AR',
    'AS',
    'TEACHER',
  ];

  const handleProfileDialogClickOpen = (user) => {
    setOpenProfileDialog(true);
    setOpenProfileObj(user);
  };

  const handleProfileDialogClose = () => {
    setOpenProfileDialog(false);
    setOpenProfileObj({});
  };

  const handleCommentDialogClickOpen = (commentOb) => {
    setOpenCommentDialog(true);
    setOpenCommentObj(commentOb);
  };

  const handleCommentDialogClose = () => {
    setOpenCommentDialog(false);
    setOpenCommentObj({});
  };

  const handleChangeSearch = (Text) => {
    setDivision(Text);
    if (Text === 'ALL') {
      setViewers(viewersLocal);
    } else {
      setViewers(viewersLocal.filter((user) => user.division === Text));
    }
  };

  const handleNewComment = () => {
    if (comment === '') {
      alert('Please enter a comment');
    } else {
      const date = getDate();
      const newComment = {
        comment: comment,
        date: date,
        uid: firebase.auth.currentUser.uid,
      };
      firebase.database
        .ref('videos/comments/' + video.id.$t)
        .push(newComment, (error) => {
          if (error) {
            alert(error);
          } else {
            fetchComments();
            setComment('');
          }
        });
    }
  };

  const handleDeleteComment = (commentOb) => {
    firebase.database
      .ref('videos/comments/' + video.id.$t + '/' +  commentOb.key)
      .remove((error) => {
        if (error) {
          alert(error);
        } else {
          handleCommentDialogClose();
          fetchComments();
        }
      });
  };

  const getDate = () => {
    var d = new Date();
    let monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let day = d.getDate();
    let monthIndex = d.getMonth();
    let monthName = monthNames[monthIndex];
    let year = d.getFullYear();

    return `${day}-${monthName}-${year}`;
  };

  useEffect(() => {
    firebase.database
      .ref('videos/views/' + video.id.$t)
      .once('value')
      .then((snapShot) => {
        var viewsObj = snapShot.val();
        var commArray = [];
        setViews(snapShot.numChildren());
        for (const key in viewsObj) {
          if (users.hasOwnProperty(key)) {
            var commObj = users[key];
            commObj.uid = key;
            commObj.date = viewsObj[key];
            commArray.push(commObj);
          }
        }
        setViewers(commArray);
        setViewersLocal(commArray);
      });

    firebase.database
      .ref('videos/likes/' + video.id.$t)
      .once('value')
      .then((snapShot) => {
        var localLikes = 0;
        snapShot.forEach((childSnapshot) => {
          if (childSnapshot.val()) {
            localLikes++;
          }
        });
        setLikes(localLikes);
      });

    fetchComments();
    //eslint-disable-next-line
  }, []);

  const fetchComments = () => {
    firebase.database
      .ref('videos/comments/' + video.id.$t)
      .once('value')
      .then((snapShot) => {
        var testArray = [];
        snapShot.forEach((childSnapshot) => {
          var commObj = childSnapshot.val();
          var uid = commObj.uid;
          if (users.hasOwnProperty(uid)) {
            commObj.name = users[uid].name || '????';
            commObj.division = users[uid].division || '????';
            commObj.phone = users[uid].phone || '????';
            commObj.profile_pic = users[uid].profile_pic || '????';
            commObj.admission_no = users[uid].admission_no || '????';
            commObj.key = childSnapshot.key || '';
            testArray.push(commObj);
          }
        });
        setComments(testArray);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        onClick={() => goBack()}
        color='primary'
        startIcon={<ArrowBackIcon />}
      >
        {' '}
        Back{' '}
      </Button>

      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={video.title.$t}
            width='auto'
            image={video.media$thumbnail.url}
            title={video.title.$t}
          />
          <CardContent>
            <Typography gutterBottom variant='p' component='h2'>
              {video.title.$t}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography component='p'>{video.published.$t}</Typography>
            <IconButton aria-label='Likes'>
              <ThumbUpIcon />
            </IconButton>
            {likes}
            <IconButton aria-label='Views'>
              <VisibilityIcon />
            </IconButton>
            {views}
          </CardActions>
        </CardActionArea>
      </Card>

      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='Views' />
        <Tab label={'Comments ' + comments.length} />
      </Tabs>
      {value === 0 ? (
        <ViewersList
          handleChangeSearch={handleChangeSearch}
          divisions={divisions}
          division={division}
          classes={classes}
          viewers={viewers}
          handleProfileDialogClickOpen={handleProfileDialogClickOpen}
        />
      ) : (
        <CommentsList
          classes={classes}
          comment={comment}
          setComment={setComment}
          comments={comments}
          handleProfileDialogClickOpen={handleProfileDialogClickOpen}
          handleNewComment={handleNewComment}
          handleCommentDialogClickOpen={handleCommentDialogClickOpen}
        />
      )}

      <ProfileDialog openProfileDialog={openProfileDialog} handleProfileDialogClose={handleProfileDialogClose} openProfileObj={openProfileObj} />
      <CommentDialog openCommentDialog={openCommentDialog} handleCommentDialogClose={handleCommentDialogClose} openCommentObj={openCommentObj} classes={classes} handleDeleteComment={handleDeleteComment} />
    </div>
  );
};

export default withStyles(styles)(VideoDetails);
