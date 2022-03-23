const editPrayerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EDIT_PRAYER':
          return action.payload
      case 'EDIT_ONCHANGE':
          return {...state, [action.payload.property]: action.payload.value}
      default:
        return state;
    }
  };
  
  export default editPrayerReducer;