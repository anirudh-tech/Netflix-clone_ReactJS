import React, { useState } from 'react';
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = ({ movie }) => {
    const [trailer, setTrailer] = useState('');
    const [url, setUrl] = useState('');

    movieTrailer(movie ? movie.title : '').then((url) => {
        setUrl(url);
        const urlParms = new URLSearchParams(new URL(url).search);
        const key = urlParms.get('v');
        setTrailer(key);
    });

    return (
        <ReactPlayer
        url={url}
        width="100%"
        height="550px"
        playing={true}
        muted={true}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              autoplay: 1,
              modestbranding: 1,
              controls: 0,
              fs: 1, 
            },
          },
        }}
      />
      
    );
};

export default VideoPlayer;
