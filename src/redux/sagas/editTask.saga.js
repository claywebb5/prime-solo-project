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

function* deleteTask(action) {
    try {
        console.log('action.payload in delete is:', action.payload)
        yield axios.delete(`/api/tasks/delete/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_TASKS' });
    } catch (error) {
        console.log('error deleting a task', error);
    }    
}

function* editTaskSaga() {
    yield takeLatest('UPDATE_TASK', editTask);
    yield takeLatest('DELETE_TASK', deleteTask);
}


export default editTaskSaga;