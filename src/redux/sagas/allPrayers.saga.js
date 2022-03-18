import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ALL_PRAYERS" actions
function* fetchAllPrayers() {
    // get all prayers from the DB
    try {
        const allPrayers = yield axios.get('/api/prayers');
        console.log('get all:', allPrayers.data);
        yield put({ type: 'SET_ALL_PRAYERS', payload: allPrayers.data });

    } catch {
        console.log('Error trying to fetchAllPrayers in sagas');
    }
}

function* allPrayersSaga() {
  yield takeLatest('FETCH_ALL_PRAYERS', fetchAllPrayers);
}

export default allPrayersSaga;