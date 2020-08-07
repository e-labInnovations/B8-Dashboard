import React from 'react';
import {
  Typography,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';

const VideoList = ({ videos, viewDetails }) => {
  return (
    <div>
      <div style={{ marginTop: 20, padding: 30 }}>
        <Grid container spacing={2} justify='center'>
          {videos.map((video) => (
            <Grid item key={video.id.$t}>
              <Card onClick={() => viewDetails(video)}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt={video.title.$t}
                    height='140'
                    width='auto'
                    image={video.media$thumbnail.url}
                    title={video.title.$t}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='p' component='h2'>
                      {video.title.$t}
                    </Typography>
                    <Typography component='p'>{video.published.$t}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default VideoList;
