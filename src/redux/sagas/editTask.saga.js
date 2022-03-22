import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


// Generator Function
// *** UPDATE ***
function* editTask(action) {
    try {
        console.log('action.payload is:', action.payload.id)
        yield axios.put(`/api/tasks/update/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_TASKS' });
    } catch (error) {
        console.log('error editing a task', error);
    }    
}

function* editTaskSaga() {
    yield takeLatest('UPDATE_TASK', editTask);
  }


export default editTaskSaga;