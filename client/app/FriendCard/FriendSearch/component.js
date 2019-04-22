import React, {Component} from 'react';

class FriendSearch extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.change(e.target.value, this.props.timer);
  }

  render(){
    return (
      <div id="friend-search">
        <input onChange={this.handleChange} id="friend-search-bar" placeholder="Search..." value={this.props.search} autoComplete="off"/>
      </div>
    )
  }
}

export default FriendSearch;
