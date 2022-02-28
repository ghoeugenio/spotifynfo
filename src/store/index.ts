/* eslint-disable no-console */
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {any} from 'prop-types';

//import rootSagas from '@sagas/';
//import rootReducers from '@ducks/';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const persistConfig = {
	key: 'spotynfo',
	storage: AsyncStorage,
	whitelist: [],
};

const middlewares = [];
middlewares.push(sagaMiddleware);

const composer = __DEV__ && compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export {store, persistor};
