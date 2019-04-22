import React, {Component} from 'react';

import QueueCard from '../QueueCard/container';
import FriendCard from '../FriendCard/container';
import SocialCard from '../SocialCard/container';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "queue",
      width: window.innerWidth,
      menu: false,
    }
    //Binding local functions to this
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  updateWindowSize() {
    this.setState({width: window.innerWidth});
  }

  componentWillMount(){
    this.props.init();
    window.addEventListener("resize",this.updateWindowSize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize",this.updateWindowSize);
  }

  render(){
    let alertFix;
    this.props.clickable ? alertFix = {
      pointerEvents: "auto",
    } :
    alertFix = {
      pointerEvents: "none",
    };
    let currentDisplay;
    switch (this.state.option) {
      case "queue":
        currentDisplay = <QueueCard/>;
        break;
      case "social":
        currentDisplay = <FriendCard/>;
        break;
      case "feed":
        currentDisplay = <SocialCard/>;
        break;
      default:

    }
    if (this.state.width > 1075) {
      return (
        <div style={alertFix} id="layout-container">
          {this.props.loading ? <p className="loading">Loading...</p> :
          <div id="layout">
            <SocialCard/>
            <QueueCard/>
            <FriendCard/>
          </div>}
        </div>
      )
    }
    else {
      return (
        <div style={alertFix} id="layout-container">
          <div id="layout-nav-button" className="ion-navicon-round" onClick={()=>{this.setState({menu: !this.state.menu})}}/>
          {!this.state.menu ? null :
            <nav id="layout-nav">
              <div className="layout-nav-item" onClick={()=>{
                this.setState({option: "queue"});
                this.setState({menu: !this.state.menu});
              }}><p>Queue</p></div>
              <div className="layout-nav-item" onClick={()=>{
                this.setState({option: "social"});
                this.setState({menu: !this.state.menu});
              }}><p>Social</p></div>
              <div className="layout-nav-item" onClick={()=>{
                this.setState({option: "feed"});
                this.setState({menu: !this.state.menu});
              }}><p>Feed</p></div>
            </nav>
          }
          {currentDisplay}
        </div>
      )
    }
  }
}

export default Layout;
