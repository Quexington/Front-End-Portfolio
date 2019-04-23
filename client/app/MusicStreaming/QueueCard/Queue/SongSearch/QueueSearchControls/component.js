import React, {Component} from 'react';

class QueueSearchControls extends React.Component {
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
        {this.props.owned || this.props.allowed ? <div onClick={() => this.handleClick("top")} className="ion-arrow-up-b search-controls-top queue-search-controls"/> : null}
        {this.props.owned || this.props.allowed ? <div onClick={() => this.handleClick("bottom")} className="ion-arrow-down-b search-controls-bottom queue-search-controls"/> : null}
      </div>
    )
  }
}

export default QueueSearchControls;
