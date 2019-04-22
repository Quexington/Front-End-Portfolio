import React, {Component} from 'react';

import Song from '../../../QueueCard/Queue/Song/container';

class NewPostSongSearch extends React.Component {
  constructor(props) {
    super(props);
    //Binding local functions to this
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.generateSongs = this.generateSongs.bind(this);
    this.blur = this.blur.bind(this);
    this.blurFix = this.blurFix.bind(this);
    //Setting state to contain an id for the blur timeout so we can cancel it when the results div is clicked
    this.state = {
      id: "0",
    };
  }

  handleChange(e){
    this.props.change(e.target.value, this.props.timer);
  }

  handleFocus(hidden){
    this.props.toggleVis(hidden);
  }

  generateSongs(){
    const ControlObj = this.props.controls;
    if (this.props.search != "") {
      const songs = this.props.results.map((e) => {
        return <Song key={e.id} obj={e} current={false} controlObj={<ControlObj song={e}/>}/>
      });
      return songs
    }
    else {
      return []
    }
  }

  blur() {
    const timerId = setTimeout(() => {
      this.handleFocus(true);
    }, 100);
    this.setState({id: timerId});
  }

  blurFix() {
    document.getElementById("new-post-search-bar").focus();
    if(this.state.id != 0) {
      clearTimeout(this.state.id);
    }
  }

  render(){
    const songs = this.generateSongs();
    return (
      <div id="new-post-search">
        <input onFocus={() => this.handleFocus(false)} onBlur={this.blur} onChange={this.handleChange} id="new-post-search-bar" placeholder="Search..." value={this.props.search} autoComplete="off"/>
        <div onClick={this.blurFix} id="new-post-search-results" className="search-results" hidden={this.props.hidden}>
          {this.props.search.length == 0 ? null : (this.props.loading ? <p>Loading...</p> : songs)}
        </div>
      </div>
    )
  }
}

export default NewPostSongSearch;
