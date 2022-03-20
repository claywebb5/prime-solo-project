// *** THIS WILL HOLD fetchTasks ***

import {put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create fetchTasks (created after we imported 'put')
// *** GET ***
function* fetchTasks() {
    try {
        console.log('In fetchTasks, about to axios.get all tasks');
        const tasksResponse = yield axios.get('/api/tasks');
        console.log('get all:', tasksResponse.data);
        yield put({ type: 'SET_TASKS', payload: tasksResponse.data });

    } catch {
        console.log('Error trying to fetchTasks in sagas');
    }
}

function* fetchTasksSaga() {
  yield takeLatest('FETCH_TASKS', fetchTasks);
}

export default fetchTasksSaga;
