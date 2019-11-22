import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Dashboard} from "./pages/Dashboard";
import {PrivateRoute} from "./components/PrivateRoute";

class App extends React.Component {
    state = {loggedIn: true};

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/register'>
                            <Register/>
                        </Route>
                        <PrivateRoute authenticated={this.state.loggedIn} path="/dashboard">
                            <Dashboard/>
                        </PrivateRoute>
                        <Route path="/">
                            <Login/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
