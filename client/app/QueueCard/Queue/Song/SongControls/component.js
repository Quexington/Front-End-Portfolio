import React, {Component} from 'react';

class SongControls extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    switch (id) {
      case "queue-song-control-img-up":
        this.props.moveToTop(this.props.id);
        break;
      case "queue-song-control-img-x":
        this.props.removeSong(this.props.id);
        break;
    }
  }

  render(){
    return (
      <div className="song-controls">
        {/*Heights and widths are temporary substitues for css*/}
        {this.props.settings.owned || (this.props.settings.access && this.props.settings["allow-friend-order"]) ? <div onClick={(e) => {this.handleClick("queue-song-control-img-up")}} className="ion-arrow-up-b queue-song-controls queue-song-control-img-up"/>: null}
        {this.props.settings.owned || (this.props.settings.access && this.props.settings["allow-friend-remove"]) ? <div onClick={(e) => {this.handleClick("queue-song-control-img-x")}} className="ion-minus-round queue-song-controls queue-song-control-img-x"/>: null}
      </div>
    )
  }
}

export default SongControls;
