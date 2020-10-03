import React, {Component} from 'react';

import Back from '../Main/Back/container';

class QuoteGen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
    }
    //Binding local functions to this
    this.getColor = this.getColor.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getColor(author) {
    switch (author) {
      case "Wonder Woman":
        return "#f5e42e"
      case "Black Panther":
        return "black"
      case "Superman":
        return "#E9F00D"
      case "Spider-Man":
        return "#de292a"
      case "Aquaman":
        return "#c47528"
      case "Captain America":
        return "#1374aa"
      case "Green Arrow":
        return "#007831"
      case "Ms. Marvel":
        return "#313b77"
      case "Green Lantern":
        return "#0c834d"
      case "Dr. Strange":
        return "#3dcac8"
      case "Martian Manhunter":
        return "#193a98"
      case "Iron Man":
        return "#eb2e2b"
      default:
        return "white"
    }
  }

  getNewQuote() {
    let newIndex = this.state.index;
    let calc = Math.floor(Math.random() * this.props.quotes.length);
    while (newIndex == calc) {
      calc = Math.floor(Math.random() * this.props.quotes.length);
    }
    console.log(calc);
    this.setState({index: calc});
  }

  render(){
    let quoteObj = this.props.quotes[this.state.index];
    let styleObj = {
      backgroundColor: this.getColor(quoteObj.author)
    }
    return (
      <div id="quotegen-container">
        <Back/>
        <div id="quotegen-subcontainer">
          <div id="quotegen-quote-box" style={styleObj}>
            <p id="quotegen-text">"{quoteObj.text}"</p>
            <p id="quotegen-author">-{quoteObj.author}</p>
            <hr width="80%"/>
            <a id="quotegen-tweet-quote" href="https://twitter.com/intent/tweet"><img id="quotegen-twitter-logo" src="./img/twitter-logo.png" alt="tweet the quote"/></a>
            <button className="btn btn-primary" id="quotegen-new-quote" onClick={this.getNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
    )
  }
};

export default QuoteGen;
