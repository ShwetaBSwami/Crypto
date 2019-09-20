import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

export default class Root extends Component {
    get content() {
        const { routes, history } = this.props;

        return (
            <Router history={history}>
                {routes}
            </Router>
        );
    }

    render() {
        const { store, persistor } = this.props;

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    { this.content }
                </PersistGate>
            </Provider>
        );
    }
}
