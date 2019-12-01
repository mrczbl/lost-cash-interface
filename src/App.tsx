import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {PrivateRoute} from "./components/PrivateRoute";
import {NotFound} from "./pages/NotFound";
import {useDispatch, useSelector} from 'react-redux';
import {apiRequest} from "./helper/ApiRequest";
import {setConfirming, setUserLogin} from "./global/actions";
import {Expenses} from "./pages/Expenses";
import {Budgets} from "./pages/Budgets";
import {AddExpense} from "./pages/AddExpense";
import {Toast} from "./components/Wrapper/Toast";

const App: React.FunctionComponent = (props: any) => {
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
                // @ts-ignore
            }).then((res: any) => {
                if (!res.error && res.code === "valid_token") {
                    dispatch(setUserLogin(res.user.name, res.user.email));
                }
                dispatch(setConfirming(false));
            }).catch((err) => {
                dispatch(setConfirming(false));
            });
        }

        if (!(!user.loggedIn && !!auth.token && !!auth.refresh_token)) {
            dispatch(setConfirming(false));
        }
        // eslint-disable-next-line
    }, [auth.refresh_token, auth.token, user.loggedIn]);

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <PrivateRoute exact authenticated={user.loggedIn} path="/add">
                    <AddExpense/>
                </PrivateRoute>
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
            <Toast/>
        </React.Fragment>
    );
};

export default App;
