import React, {Component} from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="thumbnail" onClick={()=>{
        this.props.update(this.props.description);
        window.scrollTo(0,0);
      }}>
        <img className="thumbnail-img" src={this.props.src} alt={this.props.alt}/>
        <p className="thumbnail-description">{this.props.description}</p>
      </div>
    )
  }
}

export default Thumbnail;
