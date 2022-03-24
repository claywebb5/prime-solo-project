const randomPrayerReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EDIT_PRAYER':
          return action.payload
      default:
        return state;
    }
  };
  
  export default randomPrayerReducer;