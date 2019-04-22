import React, {Component} from 'react';

import Song from '../Song/container';

class SongSearch extends React.Component {
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
    if (this.props.search == "") {
      const songs = this.props.recs.map((e) => {
        return <Song key={e.id} obj={e} current={false} controlObj={<ControlObj song={e}/>}/>
      });
      return songs
    }
    else {
      const songs = this.props.results.map((e) => {
        return <Song key={e.id} obj={e} current={false} controlObj={<ControlObj song={e}/>}/>
      });
      return songs
    }
  }

  blur() {
    const timerId = setTimeout(() => {
      this.handleFocus(true);
    }, 100);
    this.setState({id: timerId});
  }

  blurFix() {
    document.getElementById("queue-search-bar").focus();
    if(this.state.id != 0) {
      clearTimeout(this.state.id);
    }
  }

  render(){
    const songs = this.generateSongs();
    return (
      <div id="queue-search">
        <input onFocus={() => this.handleFocus(false)} onBlur={this.blur} onChange={this.handleChange} id="queue-search-bar" placeholder="Search..." value={this.props.search} autoComplete="off"/>
        <div onClick={this.blurFix} id="queue-search-results" className="search-results" hidden={this.props.hidden}>
          {this.props.loading && this.props.search.length > 0 ? <p>Loading...</p> : songs}
        </div>
      </div>
    )
  }
}

export default SongSearch;
