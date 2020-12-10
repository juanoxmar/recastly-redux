import React from 'react';


// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   handleInputChange(e) {
//     props.getYouTubeVideos(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   }

var Search = ({ handleSearchInputChange }) => {

  //render() {
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        // value={this.state.value}
        onChange={function (e) { handleSearchInputChange(e.target.value) }}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
  //}
}

export default Search;
