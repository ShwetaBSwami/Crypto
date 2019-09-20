import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import sagas from './rootSagas';
import rootReducer from './rootReducers';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
    return typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' && process.env.NODE_ENV === 'development'
        ? window.devToolsExtension()
        : f => f;
};

export default function configureStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));

    const composedStoreEnhancer = compose(
        middleware,
        reduxDevTool()
    );

    const store = composedStoreEnhancer(createStore)(persistedReducer, initialState); // allow us to create store, but this is required reducer argument
    // Provider component takes store as a prop
    const persistor = persistStore(store);
    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./rootReducers', () => {
            store.replaceReducer(require('./rootReducers'));
        });
    }

    return { store, persistor };
}



