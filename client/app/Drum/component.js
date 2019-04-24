import React, {Component} from 'react';

import Back from '../Main/Back/container';

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: false,
      power: true,
      volume: 0.3,
      display: "",
    }
    //Binding local functions to this
    this.updateDisplay = this.updateDisplay.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", (e) => {
      this.handleKeyPress(e);
    });
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", (e) => {
      this.handleKeyPress(e);
    });
  }

  updateDisplay(mes, bank) {
    if (["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].includes(mes)) {
      let array;
      if (bank) {
        array = this.props.bankOne;
      }
      else {
        array = this.props.bankTwo;
      }
      let filtArray = array.filter((e) => {
        return e.keyTrigger == mes;
      });
      this.setState({display: filtArray[0].id});
    }
    else {
      this.setState({display: mes});
    }
  }

  handlePower(e){
    if (this.state.power) {
      this.updateDisplay('Power off', null);
      setTimeout(() => {
        this.updateDisplay('', null);
      }, 1000);
    }
    else {
      this.updateDisplay('Power on', null);
      setTimeout(() => {
        this.updateDisplay('', null);
      }, 1000);
    }
    this.setState({power: !this.state.power});
  }

  handleToggle(e){
    if(this.state.power) {
      this.setState({option: !this.state.option});
      let display = this.state.option ? "Bank One" : "Bank Two";
      this.updateDisplay(display, null);
      setTimeout(() => {
        this.updateDisplay('', null);
      },1000);
    }
  }

  handleKeyPress(e){
    if (this.state.power){
      const func = (key) => {
        let audio = document.getElementById(key);
        audio.play();
        this.updateDisplay(key, this.state.option);
      }
      let key;
      switch (e.keyCode){
        case 81:
          key = "Q";
          audio.play(key);
          break;
        case 87:
          key = "W";
          audio.play(key);
          break;
        case 69:
          key = "E";
          audio.play(key);
          break;
        case 65:
          key = "A";
          audio.play(key);
          break;
        case 83:
          key = "S";
          audio.play(key);
          break;
        case 68:
          key = "D";
          audio.play(key);
          break;
        case 90:
          key = "Z";
          audio.play(key);
          break;
        case 88:
          key = "X";
          audio.play(key);
          break;
        case 67:
          key = "C";
          audio.play(key);
          break;
        default:
          break;
      }
    }
  }

  handleClick(e){
    if (this.state.power){
      let audio = document.getElementById(e.target.innerText);
      audio.play();
      this.updateDisplay(e.target.innerText, this.state.option);
    }
  }

  render(){
    let buttons = this.state.option ? this.props.bankOne : this.props.bankTwo;
    const labels = buttons.map((e) => {
      return <div id={e.id} key={e.keyTrigger} className="drum-drum-pad" onClick={this.handleClick}>
        {e.keyTrigger}
        <audio className="drum-clip" id={e.keyTrigger} src={e.url}>
        </audio>
      </div>
    });
    let styleObj = {};
    if (this.state.option) {
      styleObj = {left: 50}
    }
    return (
      <div id="drum-container">
        <Back/>
        <div id="drum-subcontainer">
          <div id="drum-drum-machine">
            <div id="drum-display-container">
              <button onClick={this.handlePower}id="drum-power-button"><img alt="power" src="https://image.freepik.com/free-icon/power-button-off_318-42222.jpg"/></button>
              <div id="drum-display">{this.state.display}</div>
              <div id="drum-switch" onClick={this.handleToggle}><div id="drum-switch-flick" style={styleObj}></div></div>
            </div>
            <div id="drum-key-buttons">
              {labels}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Drum;
