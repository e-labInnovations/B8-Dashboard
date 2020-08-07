import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import firebase from '../../firebase';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const dateFormate = (date) => {
  var d = new Date(date);
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

const Videos = ({ Tag }) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [specificVideo, setSpecificVideo] = useState(null);
  const [users, setUsers] = useState({
    '3aTOYUUdZUOZIbGOijrhtYHatlQ2': {
      admission_no: '18041656',
      division: 'G',
      name: 'MOHAMMED ASHAD',
      phone: '8089931063',
      profile_pic:
        'https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2F3aTOYUUdZUOZIbGOijrhtYHatlQ2..jpg?alt=media&token=8cf44c90-1554-4e7a-9854-150449468c42',
    },
    BXqMKgDjEteL5xiPZkrXsfyvs773: {
      admission_no: '36766',
      division: 'O',
      name: 'MUHAMMED JASEEL',
      phone: '9544952685',
      profile_pic:
        'https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2FBXqMKgDjEteL5xiPZkrXsfyvs773..jpg?alt=media&token=ee2c3200-0010-4b67-a2d3-d539678e2bad',
    },
    DThdtwhNDvg4VmRJaDYBBKxSB1k1: {
      admission_no: '19131567',
      division: 'D',
      name: 'MOHAMMED ASHAR MM',
      phone: '8137921905',
      profile_pic:
        'https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2FDThdtwhNDvg4VmRJaDYBBKxSB1k1..jpg?alt=media&token=ea1cc4be-e3cd-4862-bea9-a1521afc5993',
    },
    kgn4gV42I3NbY132bfbOU7hAzp02: {
      admission_no: '000000',
      division: 'Q',
      name: 'TESTER',
      phone: 8089931063,
      profile_pic: 'https://via.placeholder.com/150',
    },
    yWD6SbzzLpYFAlouqI405omMi1p2: {
      admission_no: '18041656',
      division: 'AD',
      name: 'MOHAMMED ASHAD MM',
      phone: '9895908979',
      profile_pic:
        'https://firebasestorage.googleapis.com/v0/b/ninetizen.appspot.com/o/profile_pics%2FyWD6SbzzLpYFAlouqI405omMi1p2..png?alt=media&token=fcc2a50d-2a26-4867-8777-9feaa6dc4f82',
    },
  });

  const handleViewDetails = (specificVideo) => {
    setSpecificVideo(specificVideo);
  };
  const handleGoBack = () => {
    setSpecificVideo(null);
  };

  const getViews = (id) => {
    return firebase.database
      .ref('videos/views/' + id)
      .once('value')
      .then((snapShot) => {
        //console.log(snapShot.val());
        var views = snapShot.numChildren();
      });
  };

  useEffect(() => {
    setSpecificVideo(null);
    setLoading(true);
    axios
      .get(
        `https://script.google.com/macros/s/AKfycbzR9H9BWSJnU1_mm-R2wpc38cqflfdItKbIIyvtQtiEGsFARB8/exec?url=https://pkmmhss9thqicqic.blogspot.com/feeds/posts/default/-/${Tag}?alt=json`
      )
      .then((res) => {
        setLoading(false);
        if (res.data.feed.hasOwnProperty('entry')) {
          var entry = res.data.feed.entry;
          var newEntry = entry.map((video) => {
            var id = 'post' + video.id.$t.split('post')[1];
            var views = 0;
            video.id.$t = id;
            video.views = views;
            video.published.$t = dateFormate(video.published.$t);
            if (video.hasOwnProperty('media$thumbnail')) {
              video.media$thumbnail.url = video.media$thumbnail.url.replace(
                '/s72-c/',
                '/s300/'
              );
            } else {
              video.media$thumbnail = { url: '' };
            }
            return video;
          });
          setVideos(newEntry);
          // console.log(newEntry);
        }
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

    firebase.database
      .ref('users')
      .once('value')
      .then((snapShot) => {
        setUsers(snapShot.val());
      });

    //eslint-disable-next-line
  }, [Tag]);

  return loading !== true ? (
    <div>
      <h2>{Tag} Videos</h2>
      <hr />

      {specificVideo ? (
        <VideoDetails
          users={users}
          video={specificVideo}
          goBack={handleGoBack}
        />
      ) : (
        <VideoList videos={videos} viewDetails={handleViewDetails} />
      )}
    </div>
  ) : (
    <div id='loader'>
      <CircularProgress />
    </div>
  );
};

export default Videos;
