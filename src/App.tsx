import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {PrivateRoute} from "./components/PrivateRoute";
import {NotFound} from "./pages/NotFound";
import {useSelector, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor} from './global/store';
import {apiRequest, fetchData} from "./helper/ApiRequest";
import {setUserLogin} from "./global/actions";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: any) => (state.auth));

    useEffect(() => {
        if (!auth.loggedIn && !!auth.token && !!auth.refresh_token) {
            apiRequest({
                url: '/authentication/confirm',
                data: {},
                timeout: 5000,
                isPost: true
            }).then((res: any) => {
                if(!res.error && res.code === "valid_token") {
                    dispatch(setUserLogin(res.user.name, res.user.email));
                }
            }).catch((err) => {});
        }
    }, [auth]);

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
                    <PrivateRoute exact authenticated={auth.loggedIn} path="/">
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
