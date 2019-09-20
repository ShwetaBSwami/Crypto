
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';  //to pass store to our components without need to pass props
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './ConfigureStore';
import { Router, Route, Link } from 'react-router-dom';
import history from './history';

const initialState = {};
const { store, persistor } = configureStore(initialState);

export const ProApp = (props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}> 
                <App props={props} />
          </Router> 
        </PersistGate>
    </Provider>
);

ReactDOM.render(
    <ProApp />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();