import ACTIONS from '../../actions';

const actionCreators = {
  updateDisplay: function(display){
    return function(dispatch) {
      dispatch({
        type: ACTIONS.UPDATE_MAIN_DISPLAY,
        display,
      });
    }
  }
}

export default actionCreators;
