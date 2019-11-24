import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {PrivateRoute} from "./components/PrivateRoute";
import {NotFound} from "./pages/NotFound";
import {useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor} from './global/store';

const App: React.FunctionComponent = () => {
    const loggedIn = useSelector((state: any) => (state.auth.loggedIn));

    return (
        <PersistGate persistor={persistor}>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <PrivateRoute exact authenticated={loggedIn} path="/">
                        <Dashboard/>
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </PersistGate>
    );
};

export default App;
