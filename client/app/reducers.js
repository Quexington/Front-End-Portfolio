//Importing the redux function that combines multiple reducers into a single representation of application state
import {combineReducers} from 'redux';

//Importing all individual component reducers
import layoutReducer from './MusicStreaming/Layout/reducer';
import queueReducer from './MusicStreaming/QueueCard/reducer';
import friendReducer from './MusicStreaming/FriendCard/reducer';
import socialReducer from './MusicStreaming/SocialCard/reducer';
import mainReducer from './Main/reducer';

//Combining all of the reducers into a single representation of application state
const allReducers = combineReducers({
  queue: queueReducer,
  friends: friendReducer,
  social: socialReducer,
  layout: layoutReducer,
  main: mainReducer,
})

export default allReducers;
