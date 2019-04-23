import React, {Component} from 'react';

class NewPostSongControls extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.remove(this.props.id);
  }

  render(){
    return (
      <div className="song-controls">
        {/*Heights and widths are temporary substitues for css*/}
        <div onClick={this.handleClick} className="ion-minus-circled new-post-song-controls new-post-controls controls"/>
      </div>
    )
  }
}

export default NewPostSongControls;
