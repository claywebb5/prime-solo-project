// =====================<GET ALL PRAYERS REDUCER>====================================

  // Used to store prayers returned from the server
const allPrayersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_PRAYERS':
            return action.payload;
        default:
            return state;
    }
}
  // allPrayersReducer will be on the redux state at:
  // state.allPrayersReducer
  export default allPrayersReducer;