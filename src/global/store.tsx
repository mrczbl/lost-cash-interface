import {createStore, applyMiddleware} from 'redux';
import {reducer} from "./reducer";
import {rootSaga} from "./saga";
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
};

const sagaMiddleware = createSagaMiddleware();
const pReducer = persistReducer(persistConfig, reducer);

export const store: any = createStore(
    pReducer,
    applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);