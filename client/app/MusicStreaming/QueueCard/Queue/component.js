import React, {Component} from 'react';

import Song from './Song/container';
import Controls from './Controls/container';
import SongSearch from './SongSearch/container';
import SongControls from './Song/SongControls/container';
import QueueSearchControls from './SongSearch/QueueSearchControls/container';

class Queue extends React.Component {
  constructor(props) {
    super(props);
  }

  //LIFECYCLE HOOKS
  componentDidUpdate(){
    if (this.props.settings.owned && this.props.songs.length <= 2 && this.props.settings["auto-fill-queue"] && !this.props.autofillLoading && !this.props.autofill) {
      //Placeholder for the method that will eventually start an async request for an autofill song
      this.props.searchAutofill();
    }
  }

  render(){
    let scrollFix = {
      overflowY: "hidden",
    }

    if (this.props.songs.length > 6) {
      scrollFix = {
        overflowY: "scroll",
        border: "1px solid black",
      }
    }

    //Defaults in case there is not enough songs in the queue
    let current = <div id="queue-current-song-wrapper"></div>;
    let all = <div></div>

    if (this.props.songs.length > 0) {
      //Copy the array so it can be modified
      const songs = Object.assign([], this.props.songs);
      //Remove the first element and store it in a variable
      const currentData = songs.shift();
      //Generate the JSX object for the song that is currently being played
      current = <Song obj={currentData} current={true} controlObj={null}/>
      if (this.props.songs.length > 1) {
        //Generate the JSX objects for the rest of the songs
        all = songs.map((e, index) => {
          return <Song key={index} obj={e} current={false} controlObj={<SongControls id={index+1}/>}/>
        });
      }
    }

    return (
      <div id="queue" className="queue-display">
        <SongSearch controls={QueueSearchControls}/>
        <div id="queue-songs-container">
          <div id="queue-current-song-container">
            {current}
          </div>
          <div style={scrollFix} id="queue-all-song-container">
            {all}
          </div>
        </div>
        {this.props.settings.owned || (this.props.settings.access && this.props.settings["allow-friend-control"]) ? <Controls/> : null}
      </div>
    )
  }
}

export default Queue;
