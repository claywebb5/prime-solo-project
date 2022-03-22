import {put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// *** GET ALL STEPS ***
function* fetchSteps() {
    try {
        console.log('In fetchSteps, about to axios.get all steps');
        const stepsResponse = yield axios.get('/api/steps');
        console.log('get all:', stepsResponse.data);
        yield put({ type: 'SET_ALL_STEPS', payload: stepsResponse.data });

    } catch {
        console.log('Error trying to fetchSteps in sagas');
    }
}

function* stepsSaga() {
  yield takeLatest('FETCH_STEPS', fetchSteps);
}

export default stepsSaga;