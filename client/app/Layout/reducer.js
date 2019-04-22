import ACTIONS from '../actions';

export default function(state={
  loading: false,
  alert: false,
}, action){
  switch (action.type){
    case ACTIONS.TOGGLE_LOADING:
      return Object.assign({}, state, {loading: action.loading});
    case ACTIONS.SET_ALERT_STATUS:
      return Object.assign({}, state, {alert: action.alert});
    default:
      return state
  }
}
