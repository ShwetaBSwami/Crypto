import { makeAsyncReducer, makeAsyncActionCreator, composeReducers } from 'redux-toolbelt';
import { makeAsyncSaga } from 'redux-toolbelt-saga';


import { fetchApi } from '../service';

export const actions = {
fetchApiAction: makeAsyncActionCreator('GET_DATA')
}

export const reducer = composeReducers({
    fetchApiReducer: makeAsyncReducer(actions.fetchApiAction)
})

const fetchApiFormSaga = makeAsyncSaga(actions.fetchApiAction, fetchApi, {
    debug: true
});

export const sagas = [

    fetchApiFormSaga(),
  

];