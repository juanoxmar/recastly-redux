import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapProps = state => ({ video: state.currentVideo });

var connected = connect(mapProps);

var VideoPlayerContainer = connected(VideoPlayer);

export default VideoPlayerContainer;
