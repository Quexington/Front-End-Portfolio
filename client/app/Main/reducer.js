import ACTIONS from '../actions';

export default function(state={
  display: "main",
}, action){
  switch(action.type){
    case ACTIONS.UPDATE_MAIN_DISPLAY:
      return Object.assign({}, state, {display: action.display});
      break;
    default:
      return state
  }
}
