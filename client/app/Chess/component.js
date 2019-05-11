import React, {Component} from 'react';

import Back from '../Main/Back/container';

class Chess extends React.Component {
  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      pieces: [
        {
          id: "a1",
          position: "a1",
          icon: "♜",
          color: "white",
        },
        {
          id: "b1",
          position: "b1",
          icon: "♞",
          color: "white",
        },
        {
          id: "c1",
          position: "c1",
          icon: "♝",
          color: "white",
        },
        {
          id: "d1",
          position: "d1",
          icon: "♛",
          color: "white",
        },
        {
          id: "e1",
          position: "e1",
          icon: "♚",
          color: "white",
        },
        {
          id: "f1",
          position: "f1",
          icon: "♝",
          color: "white",
        },
        {
          id: "g1",
          position: "g1",
          icon: "♞",
          color: "white",
        },
        {
          id: "h1",
          position: "h1",
          icon: "♜",
          color: "white",
        },
        {
          id: "a2",
          position: "a2",
          icon: "♟",
          color: "white",
        },
        {
          id: "b2",
          position: "b2",
          icon: "♟",
          color: "white",
        },
        {
          id: "c2",
          position: "c2",
          icon: "♟",
          color: "white",
        },
        {
          id: "d2",
          position: "d2",
          icon: "♟",
          color: "white",
        },
        {
          id: "e2",
          position: "e2",
          icon: "♟",
          color: "white",
        },
        {
          id: "f2",
          position: "f2",
          icon: "♟",
          color: "white",
        },
        {
          id: "g2",
          position: "g2",
          icon: "♟",
          color: "white",
        },
        {
          id: "h2",
          position: "h2",
          icon: "♟",
          color: "white",
        },
        {
          id: "a8",
          position: "a8",
          icon: "♜",
          color: "black",
        },
        {
          id: "b8",
          position: "b8",
          icon: "♞",
          color: "black",
        },
        {
          id: "c8",
          position: "c8",
          icon: "♝",
          color: "black",
        },
        {
          id: "d8",
          position: "d8",
          icon: "♛",
          color: "black",
        },
        {
          id: "e8",
          position: "e8",
          icon: "♚",
          color: "black",
        },
        {
          id: "f8",
          position: "f8",
          icon: "♝",
          color: "black",
        },
        {
          id: "g8",
          position: "g8",
          icon: "♞",
          color: "black",
        },
        {
          id: "h8",
          position: "h8",
          icon: "♜",
          color: "black",
        },
        {
          id: "a7",
          position: "a7",
          icon: "♟",
          color: "black",
        },
        {
          id: "b7",
          position: "b7",
          icon: "♟",
          color: "black",
        },
        {
          id: "c7",
          position: "c7",
          icon: "♟",
          color: "black",
        },
        {
          id: "d7",
          position: "d7",
          icon: "♟",
          color: "black",
        },
        {
          id: "e7",
          position: "e7",
          icon: "♟",
          color: "black",
        },
        {
          id: "f7",
          position: "f7",
          icon: "♟",
          color: "black",
        },
        {
          id: "g7",
          position: "g7",
          icon: "♟",
          color: "black",
        },
        {
          id: "h7",
          position: "h7",
          icon: "♟",
          color: "black",
        },
      ]
    }
    //Binding local functions to this
    this.generateBoard = this.generateBoard.bind(this);
    this.movePiece = this.movePiece.bind(this);
  }

  componentWillUpdate(){
    console.log("Hello");
    this.state.pieces.map((e) => {
      let label = "chess-square-" + e.position;
      let sqr = document.getElementById(label);
      sqr.innerText = e.icon;
      sqr.style.color = e.color;
      sqr.style.cursor = "pointer";
      sqr.onclick = (el) => {
        let square = el.target;
        let allSquares = Array.from(document.getElementsByClassName("chess-square"));
        let moveables = allSquares.filter((elem) => {
          return elem.innerText == ""
        });
        if (square.style.backgroundColor == "yellow") {
          square.style.backgroundColor = "";
          moveables.map((elem) => {
            moveables.map((ee) => {
              ee.onclick = null;
            });
          });
        }
        else {
          square.style.backgroundColor = "yellow";
          moveables.map((elem) => {
            elem.onclick = (element) => {
              let dest = element.target.id.split("-")[2];
              let origin = el.target.id.split("-")[2];
              this.movePiece(origin, dest);
              this.componentWillUpdate();
              square.style.backgroundColor = "";
              sqr.innerText = "";
              sqr.style.color = "";
              sqr.style.cursor = "";
              moveables = allSquares.filter((elem) => {
                return elem.innerText == ""
              });
              moveables.map((ee) => {
                ee.onclick = null;
              });
            }
          });
        }
      }
    });
  }

  componentDidMount(){
    this.componentWillUpdate();
  }

  generateBoard(){
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let squares = [];
    let color = true;
    for (let i = 8; i > 0; i--) {
      for (var q = 0; q < 8; q++) {
        let label = files[q] + i.toString();
        if (color) {
          squares.push(<div id={"chess-square-" + label.toString()} key={label} className="chess-square chess-square-white"></div>);
        }
        else {
          squares.push(<div id={"chess-square-" + label.toString()} key={label} className="chess-square chess-square-black"></div>);
        }
        color = !color;
      }
      color = !color;
    }
    return squares;
  }

  movePiece(origin, dest){
    let copy = Object.assign([], this.state.pieces);
    const target = this.state.pieces.filter((e) => {
      return e.position == origin
    })[0];
    const index = copy.indexOf(target);
    copy.splice(index, 1);
    copy.push(Object.assign({}, target, {position: dest}));
    this.setState({pieces: copy});
  }

  render(){
    let squares = this.generateBoard();
    return (
      <div id="chess-container">
        <Back/>
        <div id="chess-subcontainer">
          <div id="chess-board">
            {squares}
          </div>
        </div>
      </div>
    )
  }
}

export default Chess;
