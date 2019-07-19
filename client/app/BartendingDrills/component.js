import React, {Component} from 'react';

import Back from '../Main/Back/container';

class BartendingDrills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: ["﻿Bourbon & Coke",
      "Cuba Libre",
      "Rum & Coke",
      "Scotch & Soda",
      "Salty Dog",
      "Presbyterian",
      "Highball",
      "Screaming Navel",
      "Melon Ball",
      "Harvey Wall Banger",
      "Orange Blossom",
      "Sloe Comfortable Screw",
      "Screwdriver",
      "7 & 7",
      "Fuzzy Navel",
      "Ocean Breeze",
      "Bay Breeze",
      "Greyhound",
      "Cape Cod",
      "Vodka & Tonic",
      "Gin & Tonic",
      "Sloe Screw",
      "Sea Breeze",
      "Sangria",
      "Spritzer",
      "Wine Cooler",
      "Mimosa",
      "Kir Royal",
      "Kir",
      "Champagne Cocktail",
      "Green Tea",
      "Washington Apple",
      "Oatmeal Cookie",
      "Lemon Drop",
      "Flaming Dr. Pepper",
      "Jager Bomb",
      "Vegas Bomb",
      "Irish Car Bomb",
      "Lindsey Lohan",
      "Redheaded Slut",
      "Purple Hooter",
      "Kamikaze",
      "Slippery Nipple",
      "Buttery Nipple",
      "B-51",
      "B-52",
      "Incredible Hulk",
      "Stinger",
      "Godmother",
      "Godfather",
      "Rusty Nail",
      "Vodka Gimlet",
      "Gimlet",
      "Toasted Almond",
      "Kahlua & Cream (Sombrero)",
      "Colorado Bulldog",
      "White Russian",
      "Mudslide",
      "Black Russian",
      "Old Fashioned",
      "Tequila Sunset",
      "Tequila Sunrise",
      "Zipperhead",
      "Mind Eraser",
      "Blue Hawaiian",
      "Alabama Slammer",
      "Sex on the Beach",
      "Blue Ice Tea (AMF)",
      "Long Island Iced Tea",
      "Lynchburg Lemonade",
      "Sloe Gin Fizz",
      "Vodka Collins",
      "John Collins",
      "Tom Collins",
      ],
      drill: [],
    }
    //Binding local functions to this
    this.getDrill = this.getDrill.bind(this);
    this.formatDrill = this.formatDrill.bind(this);
  }

  componentDidMount() {
    this.getDrill();
  }

  getDrill() {
    let temp = [];
    for (let i=0; i < 6; i++) {
      let rando = Math.floor(Math.random()*this.state.drinks.length);
      if (temp.includes(this.state.drinks[rando])) {
        i--;
      }
      else {
        temp.push(this.state.drinks[rando]);
      }
    }
    this.setState({drill: temp});
  }

  formatDrill() {
    let ans = [];
    this.state.drill.map((e) => {
      ans.push(<p key={e} className="bartending-drills-text">{e}</p>);
      ans.push(<hr key={e + "hr"} width="80%"/>);
    });
    return ans
  }

  render() {
    let thing = this.formatDrill();
    return (
      <div id="bartending-drills-container">
        <Back/>
        <div id="bartending-drills-subcontainer">
          <div id="bartending-drills-quote-box">
            {thing}
            <button className="btn btn-primary" id="bartending-drills-new-quote" onClick={this.getDrill}>New Drill</button>
          </div>
        </div>
      </div>
    )
  }
}

export default BartendingDrills;
