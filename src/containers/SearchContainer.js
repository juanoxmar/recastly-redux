import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

/*
state {
  currentVideo: video
  videoList: list
}
*/

// map function
var mapProps = state => ({
  currentVideo: state.currentVideo,
  videoList: state.videoList
});
// dispatch function

var mapDispatch = dispatch => {
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))
  };
};

const connector = connect(mapProps, mapDispatch);

var SearchContainer = connector(Search);

//TODO: define a SearchContainer component which will hook up your action

// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.




export default SearchContainer;
