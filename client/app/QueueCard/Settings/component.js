import React, {Component} from 'react';

//A component that contains input elements to control the behavior of the queue
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
    }
    //Binding the local functions to this
    this.handleChange = this.handleChange.bind(this);
    this.classFix = this.classFix.bind(this);
    this.updateWindowSize = this.updateWindowSize.bind(this);
  }

  updateWindowSize() {
    this.setState({height: window.innerHeight});
  }

  componentWillMount(){
    window.addEventListener("resize",this.updateWindowSize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize",this.updateWindowSize);
  }

  handleChange(id){
    //If else tree due to the existence of radio buttons and how the behave differently to checkboxes
    //If the element being clicked is one of the "public"/"private" radio buttons
    if (id == "queue-private-setting" || id == "queue-public-setting"){
      const newVal = id == "queue-private-setting" ? true : false;
      //[ADD] Something here to ask them if they are sure they want to do it because people who are listening will be kicked off
      this.props.update({"queue-privacy": newVal});
    }
    //If the element being clicked is one of the access code radio buttons
    else if (id == "queue-access-invite-setting" || id == "queue-access-code-setting" || id == "queue-access-none-setting"){
      const newVal = id.split("-")[2];
      this.props.update({"access-method": newVal});
      if (id == "queue-access-code-setting") {
        this.props.loadCode();
      }
    }
    //if the element being clicked is a checkbox
    else {
      let updater = {};
      updater[id] = !this.props.settings[id];
      console.log(updater);
      this.props.update(updater);
    }
  }

  classFix(bool, type){
    if (bool) {
      if (type == "radio") {
        return " checked-radio"
      }
      else {
        return " checked-checkbox"
      }
    } else {
      return ""
    }
  }

  render(){
    let overflowFix = {};
    if (this.state.height < 800) {
      overflowFix = {
        overflowY: "scroll",
      }
    }
    return (
      <div style={overflowFix} id="queue-settings" className="queue-display">
        <div id="general-queue-settings">
          <h2 id="general-queue-settings-header" className="queue-settings-header">General</h2>
          <div className="queue-setting-option">
            <div className="queue-setting-option-radio">
              <span onClick={(e) => {this.handleChange("queue-private-setting")}} className={"queue-settings-radio-better" + this.classFix(this.props.settings["queue-privacy"], "radio")}></span>
              <input disabled={!this.props.settings.owned} readOnly className="queue-settings-radio" id="queue-private-setting" type="radio" name="public-private" checked={this.props.settings["queue-privacy"]}/>
              <label className="queue-settings-label" htmlFor="queue-private-setting">Private</label>
              <span onClick={(e) => {this.handleChange("queue-public-setting")}} className={"queue-settings-radio-better" + this.classFix(!this.props.settings["queue-privacy"], "radio")}></span>
              <input disabled={!this.props.settings.owned} readOnly className="queue-settings-radio" id="queue-public-setting" type="radio" name="public-private" checked={!this.props.settings["queue-privacy"]}/>
              <label className="queue-settings-label" htmlFor="queue-public-setting">Public</label>
            </div>
            {this.props.settings["queue-privacy"] ? <p className="queue-setting-description">Private: Only you can see and listen to what you're listening to</p> : <p className="queue-setting-description">Public: Others can see listen to what you're listening to</p>}
          </div>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("remove-after-played")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["remove-after-played"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="remove-after-played" type="checkbox" checked={this.props.settings["remove-after-played"]}/>
            <label className="queue-settings-label" htmlFor="remove-after-played">Remove played</label>
            <p className="queue-setting-description">Remove the song from the queue once it is finished playing (off will move it to the bottom)</p>
          </div>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("auto-fill-queue")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["auto-fill-queue"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="auto-fill-queue" type="checkbox" checked={this.props.settings["auto-fill-queue"]}/>
            <label className="queue-settings-label" htmlFor="auto-fill-queue">Autoplay</label>
            <p className="queue-setting-description">Find new songs to add to the queue once it is empty</p>
          </div>
        </div>
        <div id="friend-access-queue-settings">
          <h2 id="friend-access-queue-settings-header" className="queue-settings-header">Follower Access</h2>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("queue-access-invite-setting")}} className={"queue-settings-radio-better" + this.classFix(this.props.settings["access-method"] == "invite", "radio")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-radio" id="queue-access-invite-setting" type="radio" name="access-method" checked={this.props.settings["access-method"] == "invite"}/>
            <label className="queue-settings-label" htmlFor="queue-access-invite-setting">Invite Only</label>
            <span onClick={(e) => {this.handleChange("queue-access-code-setting")}} className={"queue-settings-radio-better" + this.classFix(this.props.settings["access-method"] == "code", "radio")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-radio" id="queue-access-code-setting" type="radio" name="access-method" checked={this.props.settings["access-method"] == "code"}/>
            <label className="queue-settings-label" htmlFor="queue-access-code-setting">Access Code</label>
            <span onClick={(e) => {this.handleChange("queue-access-none-setting")}} className={"queue-settings-radio-better" + this.classFix(this.props.settings["access-method"] == "none", "radio")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-radio" id="queue-access-none-setting" type="radio" name="access-method" checked={this.props.settings["access-method"] == "none"}/>
            <label className="queue-settings-label" htmlFor="queue-access-none-setting">None</label>
            {this.props.settings["access-method"] == "invite" ? <p className="queue-setting-description">Invite Only: Invite a follower for them to have access</p> : (this.props.settings["access-method"] == "code" ? <p className="queue-setting-description">Access Code: Generate a code that followers can use to gain access</p> : <p className="queue-setting-description">None: You are the only person who can edit this queue</p>)}
          </div>
          {this.props.settings["access-method"] == "code" ? <div id="access-code-container">{this.props.codeLoading ? <p>Loading...</p> : this.props.code}</div> : null}
          <div className="queue-setting-option" hidden={this.props.settings["access-method"] != "invite"}>
            <span onClick={(e) => {this.handleChange("allow-friend-invite")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["allow-friend-invite"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="allow-friend-invite" type="checkbox" checked={this.props.settings["allow-friend-invite"]}/>
            <label className="queue-settings-label" htmlFor="allow-friend-invite">Friend invite</label>
            <p className="queue-setting-description">Allow followers who have access to invite other users</p>
          </div>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("allow-friend-add")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["allow-friend-add"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="allow-friend-add" type="checkbox" checked={this.props.settings["allow-friend-add"]}/>
            <label className="queue-settings-label" htmlFor="allow-friend-add">Friend add</label>
            <p className="queue-setting-description">Allow followers who have add songs to the queue</p>
          </div>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("allow-friend-remove")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["allow-friend-remove"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="allow-friend-remove" type="checkbox" checked={this.props.settings["allow-friend-remove"]}/>
            <label className="queue-settings-label" htmlFor="allow-friend-remove">Friend remove</label>
            <p className="queue-setting-description">Allow followers who have access to remove songs from the queue</p>
          </div>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("allow-friend-control")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["allow-friend-control"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="allow-friend-control" type="checkbox" checked={this.props.settings["allow-friend-control"]}/>
            <label className="queue-settings-label" htmlFor="allow-friend-control">Friend control</label>
            <p className="queue-setting-description">Allow followers who have access to pause, skip, and rewind songs</p>
          </div>
          <div className="queue-setting-option">
            <span onClick={(e) => {this.handleChange("allow-friend-order")}} className={"queue-settings-checkbox-better" + this.classFix(this.props.settings["allow-friend-order"], "checkbox")}></span>
            <input disabled={!this.props.settings.owned} readOnly className="queue-settings-checkbox" id="allow-friend-order" type="checkbox" checked={this.props.settings["allow-friend-order"]}/>
            <label className="queue-settings-label" htmlFor="allow-friend-order">Friend shuffle</label>
            <p className="queue-setting-description">Allow followers who have access to change the order of the queue</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings;
