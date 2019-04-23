import ACTIONS from '../../actions';

export default function(state={
  navOption: "Queue",
  //Queue is empty by default
  songs: [],
  cache: {},
  settings: {
    //Not temporary, it should start paused
    play: false,
    //Will be true by default, but the backend is responsible for making this option false on non-owned queues
    owned: true,
    //Will be false by default, but the backend is responsible for making this option true for friends with access
    access: false,
    //DEFAULT DATA
    //Should be updated with an API call on component mount of the queue card
    "remove-after-played": true,
    "shuffle-setting": false,
    "auto-fill-queue": true,
    "queue-privacy": true,
    "allow-friend-add": true,
    "allow-friend-invite": false,
    "allow-friend-control": false,
    "allow-friend-order": false,
    "allow-friend-remove": false,
    "access-method": "invite",
    "access-code": "We could not generate an access code for you at this time...",
  },
  info: {
    "listeners": "1",
    "contributors": "1",
    "time-played": "0:00",
    "most-played-genre": "",
    "songs-listened-to": "0",
  },
  autofill: null,
  loading: {
    "autofill-loading": false,
    "queue-loading": false,
    "access-code-loading": false,
    "search-loading": false,
  },
  search: "",
  "results-hidden": true,
  "search-timer-id": "0",
  recommendations: [],
  "search-results": [],
}, action){
  switch(action.type){
    case ACTIONS.UPDATE_NAV_OPTION:
      return Object.assign({}, state, {
        navOption: action.option
      });
    //Toggles the loading status for the queue
    case ACTIONS.TOGGLE_QUEUE_LOADING:
      const loadingUpdater = {};
      loadingUpdater[action.element] = action.loading;
      const stateLoadingUpdater = Object.assign({}, state.loading, {loading: loadingUpdater});
      return Object.assign({}, state, stateLoadingUpdater);
    //Caches the queue state so that it can be returned to if necessary
    case ACTIONS.CACHE_QUEUE_STATE:
      const cacheQueueState = {
        songs: state.songs,
        settings: Object.assign({}, state.settings, {play: false}),
        recommendations: state.recommendations,
      };
      return Object.assign({}, state, {cache: cacheQueueState});
    //Completely reinitializes the queue and its settings
    case ACTIONS.INITIALIZE_QUEUE_STATE:
      const initializeQueueTemp = {}
      if (action.songs != undefined) {
        initializeQueueTemp.songs = action.songs;
      }
      if (action.settings != undefined) {
        initializeQueueTemp.settings = action.settings;
      }
      if (action.recs != undefined) {
        initializeQueueTemp.recommendations = action.recs;
      }
      return Object.assign({}, state, initializeQueueTemp);
    //Completely reinitializes the queue and its settings
    case ACTIONS.INITIALIZE_QUEUE_CACHE:
      const initializeQueueCache = {
        songs: state.cache.songs,
        settings: state.cache.settings,
        recommendations: state.cache.recommendations,
      };
      return Object.assign({}, state, initializeQueueCache);
    //Updates settings with the given object (created by component)
    case ACTIONS.HANDLE_QUEUE_SETTINGS_CHANGE:
      const updater = Object.assign({}, state.settings, action.updater);
      return Object.assign({}, state, {settings: updater});
    //Toggles between play being true and false
    case ACTIONS.TOGGLE_QUEUE_PLAY_STATUS:
      return Object.assign({}, state, {play: !state.play});
    //For triggering a queue next if the async autofill request finishes after the queue is empty
    case ACTIONS.AUTOFILL_TRIGGER_QUEUE_NEXT:
      if (state.songs.length !== 0) {
        return state
      }
    //Removes the first song in the queue and possibly moves a random one to the top (shuffle setting)
    case ACTIONS.QUEUE_NEXT:
      //Copy the queue so it can be modified
      let songs = Object.assign([], state.songs);
      if (songs.length > 0){
        let reAdd = songs.shift();
        //If shuffle toggled
        if (songs.length > 1 && state.settings["shuffle-setting"]) {
          const randIndex = Math.floor(Math.random() * songs.length);
          const nextSong = songs.splice(randIndex, 1);
          songs.unshift(nextSong[0]);
        }
        //If remove played NOT toggled
        if (!state.settings["remove-after-played"]) {
          songs.push(reAdd);
        }
      }
      let autofill = state.autofill;
      //If autofill toggled AND it is time to autofill && there is already an autofill queued up
      if(songs.length == 0 && state.autofill && state.settings["auto-fill-queue"]){
        songs.push(autofill);
        autofill = null;
      }
      return Object.assign({}, state, {songs, autofill});
    //Adds a song to either the top or the bottom of the queue
    case ACTIONS.ADD_SONG:
      const newSong = action.song;
      if (action.spot == "bottom") {
        let newSongs = Object.assign([], state.songs);
        newSongs.push(action.song);
        return Object.assign({}, state, {songs: newSongs});
      }
      else if (action.spot == "top") {
        let newSongs = Object.assign([], state.songs);
        newSongs.splice(1,0,action.song);
        return Object.assign({}, state, {songs: newSongs});
      }
      else {
        break;
      }
    //Sets the autofill option to be added to the queue once it is empty
    case ACTIONS.LOAD_AUTOFILL_OPTION:
      return Object.assign({}, state, {autofill: action.song});
    //Moves a specific song to the top of the queue (below current) or removes it
    case ACTIONS.REMOVE_SONG_FROM_QUEUE:
    case ACTIONS.MOVE_SONG_TO_TOP:
      //Copy the queue so it can be modified
      let queue = Object.assign([], state.songs);
      //If statement preventing unexpected behavior when there is too few songs in the queue
      if (queue.length > 1) {
        //Get the selected song into a variable
        const selectedSong = Object.assign({}, queue[action.index]);
        //Find the index of that song
        const selectedIndex = action.index;
        //Remove the song from the queue
        queue.splice(selectedIndex, 1);
        if (action.type == ACTIONS.MOVE_SONG_TO_TOP){
          //Move it to the top of the array
          queue.splice(1, 0, selectedSong);
        }
      }
      return Object.assign({}, state, {songs: queue});
    //For handling changes to the search input
    case ACTIONS.HANDLE_QUEUE_INPUT_CHANGE:
      return Object.assign({}, state, {search: action.value});
    //For toggling the visibility of the queue search results div
    case ACTIONS.TOGGLE_QUEUE_RESULTS_HIDDEN:
      return Object.assign({}, state, {"results-hidden": action.hidden});
    //For keeping track of the timer to make a search api request to prevent a shitload of requests
    case ACTIONS.SET_QUEUE_SEARCH_TIMER_ID:
      return Object.assign({}, state, {"search-timer-id": action.id});
    //For updating the search results
    case ACTIONS.SET_QUEUE_SEARCH_RESULTS:
      return Object.assign({}, state, {"search-results": action.results});
    default:
      return state
  }
}
