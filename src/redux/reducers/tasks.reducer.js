// *** THIS WILL HOLD tasksList ***

import {put} from 'redux-saga/effects';
import axios from 'axios';

const tasksList = (state = [], action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return action.payload;
        default:
            return state;
    }
}; 

export default tasksList;