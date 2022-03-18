// *** THIS WILL HOLD  ***

import {put} from 'redux-saga/effects';
import axios from 'axios';


// Generator Function
// *** POST ***
function* addTask(action) {
    try {
        yield axios.post('/api/tasks', action.payload);
        yield put({ type: 'FETCH_TASKS' });
    } catch (error) {
        console.log('error posting a new task', error);
    }    
}


export default addTask;