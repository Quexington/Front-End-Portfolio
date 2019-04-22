//Importing the redux function that combines multiple reducers into a single representation of application state
import {combineReducers} from 'redux';

//Importing all individual component reducers
import layoutReducer from './Layout/reducer';
import queueReducer from './QueueCard/reducer';
import friendReducer from './FriendCard/reducer';
import socialReducer from './SocialCard/reducer';

//Combining all of the reducers into a single representation of application state
const allReducers = combineReducers({
  queue: queueReducer,
  friends: friendReducer,
  social: socialReducer,
  layout: layoutReducer,
})

export default allReducers;
