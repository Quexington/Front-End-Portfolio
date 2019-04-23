import React, {Component} from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const styles = this.props.generate(this.props.user);
    let styleFix = {
      color: "white",
    }
    if (this.props.user["streaming"] == "true") {
      styleFix = {
        color: "#ccff00",
      }
    }
    return (
      <div id="social-user-info">
        <div className="user-profile-icons profile-icons">
          <img id="user-profile-pic" className="profile-pic" style={styles.imgStyleObj} src={this.props.user["profile-pic-url"]} alt={this.props.user["username"] + " Profile Pic"}/>
          <div style={styles.onlineStyleObj} id="user-online-indicator" className="online-indicator"></div>
          {this.props.user["streaming"] == "true" ? styles.accessImgSrc : null}
        </div>
        <div style={styleFix} className="friend-profile-text">
          <div className="friend-text"><p id="user-username">{this.props.user["username"]}</p></div>
          {this.props.user["streaming"] == "true" ? <div className="friend-text"><p id="user-current-playing">{this.props.user["current-playing"]}</p></div> : null}
        </div>
      </div>
    )
  }
}

export default UserInfo;
