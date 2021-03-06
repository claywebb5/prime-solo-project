import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ALL_PRAYERS" actions
function* fetchAllPrayers() {
    // get all prayers from the DB
    try {
        console.log('In fetchAllPrayers, about to axios.get all prayers');
        const allPrayers = yield axios.get('/api/prayer');
        console.log('get all:', allPrayers.data);
        yield put({ type: 'SET_ALL_PRAYERS', payload: allPrayers.data });

    } catch {
        console.log('Error trying to fetchAllPrayers in sagas');
    }
}

// Generator Function
// *** UPDATE ***
function* editPrayer(action) {
    try {
        console.log('action.payload is:', action.payload.id);
        yield axios.put(`/api/prayer/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_ALL_PRAYERS'});
    } catch (error) {
        console.log('Error adding interpretation in saga:', error);        
    }
}

function* allPrayersSaga() {
  yield takeEvery('FETCH_ALL_PRAYERS', fetchAllPrayers);
  yield takeLatest('UPDATE_PRAYER', editPrayer);
}

export default allPrayersSaga;