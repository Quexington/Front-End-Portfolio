import ACTIONS from '../../actions';

const actionCreators = {
  //Dispatches the action that will update the props.navOption variable in the component
  updateNavOption: function(option){
    return function(dispatch){
      dispatch({
        type: ACTIONS.UPDATE_NAV_OPTION,
        option
      });
    }
  }
}

export default actionCreators;
