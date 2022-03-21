// =====================<GET ALL STEPS REDUCER>====================================

  // Used to store steps returned from the server
  const allStepsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_STEPS':
            return action.payload;
        default:
            return state;
    }
}

  export default allStepsReducer;