import ACTIONS from '../actions';

export default function(state={
  display: "main",
  animations: true,
}, action){
  switch(action.type){
    case ACTIONS.UPDATE_MAIN_DISPLAY:
      return Object.assign({}, state, {display: action.display});
      break;
    case ACTIONS.STOP_ANIMATIONS:
      return Object.assign({}, state, {animations: false});
      break;
    default:
      return state
  }
}
