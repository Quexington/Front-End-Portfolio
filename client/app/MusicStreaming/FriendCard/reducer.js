import ACTIONS from '../../actions';

export default function(state={
  //Default empty, will be updated by an api call
  friends: [],
  //loaders
  loading: {
    "friends-loading": false,
  },
  search: "",
  "search-timer-id": "0",
  "search-results": [],
  "friend-streaming-id": "",
  alert: false,
  removeFriendId: "",
}, action){
  switch(action.type){
    //Toggling the selected loaders
    case ACTIONS.TOGGLE_FRIENDS_LOADING:
      const loadingUpdater = {};
      loadingUpdater[action.element] = action.loading;
      const stateLoadingUpdater = Object.assign({}, state.loading, {loading: loadingUpdater});
      return Object.assign({}, state, stateLoadingUpdater);
    //Completely re-initializes the friends array
    case ACTIONS.INITIALIZE_FRIEND_STATE:
      return Object.assign({}, state, {friends: action.friends});
    //Remove a friend from the array
    case ACTIONS.REMOVE_FRIEND:
      return Object.assign({}, state, {friends: state.friends.filter((e) => {
        return e["friend_id"] != action.id
      })})
    //For handling the changes to the search bar
    case ACTIONS.HANDLE_FRIEND_INPUT_CHANGE:
      return Object.assign({}, state, {search: action.value});
    //For updating the search results when they are received
    case ACTIONS.SET_FRIEND_SEARCH_RESULTS:
      return Object.assign({}, state, {"search-results": action.results});
    //For keeping track of the timer to make a search api request to prevent a shitload of requests
    case ACTIONS.SET_FRIEND_SEARCH_TIMER_ID:
      return Object.assign({}, state, {"search-timer-id": action.id});
    //For adding a friend to the friends list
    case ACTIONS.ADD_FRIEND:
      const filteredAddFriend = state["search-results"].filter((e) => {
        return e["friend_id"] == action.id
      })[0];
      if (state.friends.filter((e) => { return e["friend_id"] == action.id }).length == 0) {
        const copyAddFriendResults = Object.assign([], state["search-results"]);
        copyAddFriendResults.splice(state["search-results"].indexOf(filteredAddFriend), 1);
        return Object.assign({}, state, {friends: [...state.friends, filteredAddFriend], "search-results": copyAddFriendResults});
      }
    //For keeping track of the friend that you are streaming from
    case ACTIONS.SET_FRIEND_STREAMING_ID:
      return Object.assign({}, state, {"friend-streaming-id": action.id});
    //For popping up the alert to verify the removal of a friend
    case ACTIONS.SET_FRIEND_ALERT_STATUS:
      return Object.assign({}, state, {alert: action.alert});
    //For keeping track of the friend that the user might want to delete
    case ACTIONS.SET_FRIEND_ALERT_DATA:
      return Object.assign({}, state, {removeFriendId: action.id});
    default:
      return state
  }
}
