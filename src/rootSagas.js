import { all } from 'redux-saga/effects';
import { DataSagas } from './redux';
export default function* sagas() {
    // this is used to listen all sagas one by one
    yield all([
        ...DataSagas,
       
    ]);
}
