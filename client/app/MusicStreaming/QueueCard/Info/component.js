import React, {Component} from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.generateStatistics = this.generateStatistics.bind(this);
  }

  //Function to generate the JSX containing all of the available statistics
  generateStatistics(){
    //Get all of the statistic keys
    const keys = Object.keys(this.props.info);
    //Create the array of p tags containing the stats
    const newJSX = keys.map((e) => {
      //Format the display string from the object key
      let newStr = e.split("-").join(" ");
      newStr = newStr[0].toUpperCase() + newStr.slice(1);
      //return the JSX
      return <p className="queue-info-statistic" key={e}>{newStr + ": " + this.props.info[e]}</p>
    });
    return newJSX
  }

  render(){
    const data = this.generateStatistics();
    return (
      <div id="queue-info" className="queue-display">
        {data}
      </div>
    )
  }
}

export default Info;
