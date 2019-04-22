import ACTIONS from '../actions';

export default function(state={
  user: {},
  posts: [],
  loading: {
    "social-loading": false,
    "search-loading": false,
    "post-loading": false,
  },
  focus: false,
  "new-post": {
    search: "",
    active: false,
    description: "",
    songs: [],
    "search-results": [],
    "search-timer-id": "",
    "results-hidden": true,
  },
}, action){
  switch(action.type){
    //Toggling the selected loaders
    case ACTIONS.TOGGLE_SOCIAL_LOADING:
      const loadingUpdater = {};
      loadingUpdater[action.element] = action.loading;
      const stateLoadingUpdater = Object.assign({}, state.loading, {loading: loadingUpdater});
      return Object.assign({}, state, stateLoadingUpdater);
    //Toggling whether the social tab is focused on all posts or just a single user
    case ACTIONS.TOGGLE_SOCIAL_FOCUS:
      return Object.assign({}, state, {focus: action.focus});
    //Reinitializes the social card state
    case ACTIONS.INITIALIZE_SOCIAL_STATE:
      const initializeSocialTemp = {}
      if (action.posts != undefined) {
        initializeSocialTemp.posts = action.posts;
      }
      if (action.user != undefined) {
        initializeSocialTemp.user = action.user;
      }
      return Object.assign({}, state, initializeSocialTemp);
    //Activates and deactivates new post card
    case ACTIONS.POP_UP_NEW_POST:
      const popUpUpdater = Object.assign({}, state["new-post"], {active: action.active});
      return Object.assign({}, state, {"new-post": popUpUpdater});
    //For controlling the new post description input
    case ACTIONS.UPDATE_NEW_POST_DESCRIPTION:
      const updateNewPostDescriptionUpdater = Object.assign({}, state["new-post"], {description: action.description});
      return Object.assign({}, state, {"new-post": updateNewPostDescriptionUpdater});
    //Adding new songs to the new post
    case ACTIONS.ADD_NEW_POST_SONG:
      let addNewPostSongSongs = Object.assign([], state["new-post"].songs);
      if (action.spot == "top") {
        addNewPostSongSongs.unshift(action.song);
      }
      else if (action.spot == "bottom") {
        addNewPostSongSongs.push(action.song);
      }
      const addNewPostSongUpdater = Object.assign({}, state["new-post"], {songs: addNewPostSongSongs});
      return Object.assign({}, state, {"new-post": addNewPostSongUpdater});
    //Removing songs from the new post
    case ACTIONS.REMOVE_NEW_POST_SONG:
      let removeNewPostSongSongs = Object.assign([], state["new-post"].songs);
      removeNewPostSongSongs.splice(action.id, 1);
      const removeNewPostSongUpdater = Object.assign({}, state["new-post"], {songs: removeNewPostSongSongs});
      return Object.assign({}, state, {"new-post": removeNewPostSongUpdater});
    //Controlling the search bar
    case ACTIONS.HANDLE_NEW_POST_INPUT_CHANGE:
      const handleInputChangeUpdater = Object.assign({}, state["new-post"], {search: action.value});
      return Object.assign({}, state, {"new-post": handleInputChangeUpdater});
    //For setting the search results
    case ACTIONS.SET_NEW_POST_SEARCH_RESULTS:
      const setSearchUpdater = Object.assign({}, state["new-post"], {"search-results": action.results});
      return Object.assign({}, state, {"new-post": setSearchUpdater});
    //For setting the search timer id
    case ACTIONS.SET_NEW_POST_SEARCH_TIMER_ID:
      const setSearchTimerUpdater = Object.assign({}, state["new-post"], {"search-timer-id": action.id});
      return Object.assign({}, state, {"new-post": setSearchTimerUpdater});
    //For setting the search timer id
    case ACTIONS.TOGGLE_NEW_POST_RESULTS_HIDDEN:
      const toggleResultsHiddenUpdater = Object.assign({}, state["new-post"], {"results-hidden": action.hidden});
      return Object.assign({}, state, {"new-post": toggleResultsHiddenUpdater});
    //Clearing the slate for future new posts
    case ACTIONS.CANCEL_NEW_POST:
      const defaultData = {
        search: "",
        active: false,
        description: "",
        songs: [],
        "search-results": [],
        "search-timer-id": "",
        "results-hidden": true,
      };
      return Object.assign({}, state, {"new-post": defaultData});
    //For creating new posts (duh)
    case ACTIONS.CREATE_NEW_POST:
      let createNewPosts = Object.assign([], state.posts);
      createNewPosts.unshift(action.post);
      console.log(createNewPosts);
      return Object.assign({}, state, {posts: createNewPosts});
    default:
      return state
  }
}
