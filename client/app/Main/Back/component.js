import React, {Component} from 'react';

class Back extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="/"><p id="main-back-div" onClick={()=>{
        this.props.update("main");
        window.scrollTo(0,0);
      }}>Back to Portfolio</p></a>
    )
  }
}

export default Back;
