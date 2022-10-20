import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import YouTube from 'react-youtube';
import { movieVideosAction } from '../redux/actions/movieVideosAction';

const Trailer = () => {
    let id = useParams('id');
    const dispatch = useDispatch();
    const { video, loading } = useSelector(state => state.video);

    console.log('video', video )
    useEffect(() => {
        dispatch(movieVideosAction.getVideoId(id));

    }, []);
    
    const onPlayerReady = (event) => {
        event.target.playVideo();
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
  
    if (loading) {
        return <ClipLoader color="{black}" loading={loading} size={150} />
    }
    return (
        <div>
            <YouTube videoId={video.results[0].key} opts={opts} onPlay={onPlayerReady} />;
        </div>
    )
}

export default Trailer
