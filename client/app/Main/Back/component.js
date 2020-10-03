import React, {Component} from 'react';

class Back extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p id="main-back-div" onClick={()=>{
        this.props.update("main");
        this.props.stopAnimations();
        window.scrollTo(0,0);
      }}>← Back to Portfolio</p>
    )
  }
}

export default Back;
