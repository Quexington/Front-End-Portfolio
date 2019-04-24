import React, {Component} from 'react';

import Back from '../Main/Back/container';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topDisplay: '',
      bottomDisplay: '0',
    }
    //Binding local functions to this
    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.generateButtons = this.generateButtons.bind(this);
  }

  calculate(text) {
    let numberArray = text.split(/[^0-9.]+/).filter((e) => {
      return e != ""
    });
    let operatorArray = text.split(/[0-9.]+/).filter((e) => {
      return e != ""
    });;
    let sum = parseFloat(numberArray[0]);
    if (numberArray.length > 1){
      for (let i = 1; i < numberArray.length; i++) {
        switch (operatorArray[i-1]) {
          case "/":
            sum /= parseFloat(numberArray[i]);
            break;
          case "x":
            sum *= parseFloat(numberArray[i]);
            break;
          case "-":
            sum -= parseFloat(numberArray[i]);
            break;
          case "+":
            sum += parseFloat(numberArray[i]);
            break;
        }
      }
    }
    return Math.round(sum * 10000) / 10000;
  }

  handleClick(e){
    if (this.state.topDisplay.includes("=")) {
      this.setState({topDisplay: ''});
    }
    switch (e.target.innerText) {
      case "AC":
        this.setState({topDisplay: ''});
        this.setState({bottomDisplay: '0'});
        break;
      case "/":
      case "x":
      case "-":
      case "+":
        if (!["/", "x", "-", "+"].includes(this.state.topDisplay[this.state.topDisplay.length-1])){
          this.setState({topDisplay: this.state.topDisplay + e.target.innerText});
          this.setState({bottomDisplay: e.target.innerText});
        }
        else {
          let temp = this.state.topDisplay.slice(0, this.state.topDisplay.length - 1);
          this.setState({topDisplay: temp + e.target.innerText});
          this.setState({bottomDisplay: e.target.innerText});
        }
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        if(["0", "/", "-", "+", ].includes(this.state.bottomDisplay)) {
          this.setState({bottomDisplay: e.target.innerText});
          this.setState({topDisplay: this.state.topDisplay + e.target.innerText});
        }
        else if(!(e.target.innerText == "." && this.state.bottomDisplay.includes("."))){
          this.setState({bottomDisplay: this.state.bottomDisplay + e.target.innerText});
          this.setState({topDisplay: this.state.topDisplay + e.target.innerText});
        }
        break;
      case "=":
        let calc = this.calculate(this.state.topDisplay);
        this.setState({bottomDisplay: calc});
        this.setState({topDisplay: this.state.topDisplay + "=" + calc});
        break;
    }
  }

  generateButtons() {
    const buttons = [
      {id: "calculator-clear", text: "AC"},
      {id: "calculator-equals", text: "="},
      {id: "calculator-decimal", text: "."},
      {id: "calculator-divide", text: "/"},
      {id: "calculator-multiply", text: "x"},
      {id: "calculator-subtract", text: "-"},
      {id: "calculator-add", text: "+"},
      {id: "calculator-zero", text: "0"},
      {id: "calculator-one", text: "1"},
      {id: "calculator-two", text: "2"},
      {id: "calculator-three", text: "3"},
      {id: "calculator-four", text: "4"},
      {id: "calculator-five", text: "5"},
      {id: "calculator-six", text: "6"},
      {id: "calculator-seven", text: "7"},
      {id: "calculator-eight", text: "8"},
      {id: "calculator-nine", text: "9"}].map((e, index) => {
        return <div key={index} className="calculator-key" style={{gridArea: e.id}} id={e.id} onClick={this.handleClick}>{e.text}</div>
      });

      return buttons
  }

  render(){
    const buttons = this.generateButtons();
    return (
      <div id="calculator-container">
        <Back/>
        <div id="calculator-subcontainer">
          <div id="calculator-display-container">
            <div id="calculator-helper-display">{this.state.topDisplay}</div>
            <div id="calculator-display">{this.state.bottomDisplay}</div>
          </div>
          <div id="calculator-button-container">
            {buttons}
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;
