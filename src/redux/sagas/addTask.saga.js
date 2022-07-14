// *** THIS WILL HOLD  ***

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// Generator Function
// *** POST ***
function* addTask(action) {
    try {
        console.log('action.payload is:', action.payload)
        yield axios.post('/api/tasks', action.payload);
        yield put({ type: 'FETCH_TASKS' });
    } catch (error) {
        console.log('error posting a new task', error);
    }
}

function* addTaskSaga() {
    yield takeLatest('ADD_TASK', addTask);
}


export default addTaskSaga;