import React, {Component} from 'react';

class NewPostSearchControls extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.add(this.props.song, id);
  }

  render(){
    return (
      <div className="search-controls song-controls">
        <div onClick={() => this.handleClick("top")} className="ion-arrow-up-b search-controls-top new-post-search-controls"/>
        <div onClick={() => this.handleClick("bottom")} className="ion-arrow-down-b search-controls-bottom new-post-search-controls"/>
      </div>
    )
  }
}

export default NewPostSearchControls;
