import React, {Component} from 'react';

//Import the child components
import Queue from './Queue/container'
import Settings from './Settings/container'
import Info from './Info/container'

class QueueCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, arg) {
    //Prevent the refresh
    e.preventDefault();
    //Update the display variable to show the selected option
    this.props.updateNavOption(arg);
  }

  render(){
    let styleFix = {
      color: "#787878"
    }

    //Defining the different views
    const QUEUE_ELEMENT = <Queue/>;
    const INFO_ELEMENT = <Info/>;
    const SETTINGS_ELEMENT = <Settings/>;

    //Defining the variable that will be used to dynamically render the different view options
    let display = QUEUE_ELEMENT;
    //Setting the view to the selected option as provided by the applicaton state
    switch(this.props.navOption) {
      default:
      case "Queue":
        display = QUEUE_ELEMENT;
        styleFix = {
          color: "white"
        }
        break;
      case "Info":
        display = INFO_ELEMENT;
        styleFix = {
          color: "white"
        }
        break;
      case "Settings":
        display = SETTINGS_ELEMENT;
        styleFix = {
          color: "white"
        }
        break;
    }

    return (
      <div id="queue-card">
        <nav id="queue-card-nav">
          <h1 id="queue-card-nav-queue" style={this.props.navOption == "Queue" ? styleFix : null} className="dev-card-header" onClick={(e) => {this.handleClick(e, "Queue")}}>Queue</h1>
          <h1 id="queue-card-nav-info" style={this.props.navOption == "Info" ? styleFix : null} className="dev-card-header" onClick={(e) => {this.handleClick(e, "Info")}}>Info</h1>
          <h1 id="queue-card-nav-settings" style={this.props.navOption == "Settings" ? styleFix : null} className="dev-card-header" onClick={(e) => {this.handleClick(e, "Settings")}}>Settings</h1>
        </nav>
        {/*dynamically rendered view*/}
        {this.props.loading ? <p className="loading">Loading...</p> : display}
      </div>
    )
  }
}

export default QueueCard;
