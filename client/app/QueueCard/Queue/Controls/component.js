import React, {Component} from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleQueueControls = this.handleQueueControls.bind(this);
  }

  //Function to handle when the control buttons are clicked
  handleQueueControls(id){
    //switch to do a different action depending on which of the control buttons is clicked
    switch (id) {
      //Toggling play
      case "queue-control-main":
        this.props.handleSetting({"play": !this.props.settings["play"]});
        break;
      //Going to next song (taking the shuffle setting into account)
      case "queue-control-forward":
        this.props.queueNext();
        break;
      //Rewinding the song
      case "queue-control-back":
        break;
      //Toggling the shuffle setting
      case "queue-control-shuffle":
        this.props.handleSetting({"shuffle-setting": !this.props.settings["shuffle-setting"]});
        break;
      default:
        break;
    }
  }

  render(){
    let shuffleFix = {}
    if (this.props.settings["shuffle-setting"]) {
      shuffleFix = {
        color: "#ccff00",
      }
    }
    //Creating play/pause button img properties conditionally
    const playIcon = !this.props.settings.play ?
    <div onClick={(e) => {this.handleQueueControls("queue-control-main")}} id="queue-control-main" className="ion-play queue-control-img"/> :
    <div onClick={(e) => {this.handleQueueControls("queue-control-main")}} id="queue-control-main" className="ion-pause queue-control-img"/>;
    //Creating shuffle button img properties conditionally
    const shuffleImgSrc = this.props.settings["shuffle-setting"] ? "../img/queue-shuffle-button.png" : "../img/queue-shuffle-button_2.png";
    const shuffleImgAlt = this.props.settings["shuffle-setting"] ? "shuffle off" : "shuffle on";

    return (
      <div id="queue-controls">
        {/*Heights and widths are temporary substitues for css*/}
        <div onClick={(e) => {this.handleQueueControls("queue-control-back")}} id="queue-control-back" className="ion-skip-backward queue-control-img"/>
        {playIcon}
        <div onClick={(e) => {this.handleQueueControls("queue-control-forward")}} id="queue-control-forward" className="ion-skip-forward queue-control-img"/>
        <div style={shuffleFix} onClick={(e) => {this.handleQueueControls("queue-control-shuffle")}} id="queue-control-shuffle" className="ion-shuffle queue-control-img"/>
      </div>
    )
  }
}

export default Controls;
