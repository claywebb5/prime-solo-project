// ============<SELECTED PRAYER TO BE EDITED REDUCER>=============

// Selected prayer reducer
const selectedPrayer = (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_PRAYER':
            return action.payload;
        default:
            return state;
    }
}

export default selectedPrayer;
