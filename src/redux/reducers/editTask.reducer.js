const editTaskReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_EDIT_TASK':
          return action.payload
      default:
        return state;
    }
  };
  
  export default editTaskReducer;