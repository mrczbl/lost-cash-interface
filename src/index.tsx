import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {persistor, store} from "./global/store";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Router} from 'react-router-dom';
import {history} from "./global/history";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router history={history}>
                <App/>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ServiceWorker.unregister();
