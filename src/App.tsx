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
import {apiRequest} from "./helper/ApiRequest";
import {setUserLogin} from "./global/actions";
import {Expenses} from "./pages/Expenses";
import {Budgets} from "./pages/Budgets";

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => (state.user));
    const auth = useSelector((state: any) => (state.auth));

    useEffect(() => {
        if (!user.loggedIn && !!auth.token && !!auth.refresh_token) {
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
    }, [user, auth, dispatch]);

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
                    <PrivateRoute exact authenticated={user.loggedIn} path="/">
                        <Dashboard/>
                    </PrivateRoute>
                    <PrivateRoute exact authenticated={user.loggedIn} path="/budgets">
                        <Budgets/>
                    </PrivateRoute>
                    <PrivateRoute exact authenticated={user.loggedIn} path="/expenses">
                        <Expenses/>
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
