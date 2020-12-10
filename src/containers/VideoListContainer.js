import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/videoList.js';

var mapProps = state => ({ videos: state.videoList });

var mapDispatch = dispatch => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideoList(video))
  };
};
var connected = connect(mapProps, mapDispatch);
var VideoListContainer = connected(VideoList);


export default VideoListContainer;
