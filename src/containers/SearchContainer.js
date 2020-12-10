import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapProps = state => ({
  currentVideo: state.currentVideo,
  videoList: state.videoList
});

var mapDispatch = dispatch => {
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))
  };
};

const connector = connect(mapProps, mapDispatch);

var SearchContainer = connector(Search);

export default SearchContainer;
