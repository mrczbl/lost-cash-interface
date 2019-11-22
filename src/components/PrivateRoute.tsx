import {Redirect, Route} from "react-router-dom";
import React from "react";

// @ts-ignore
export function PrivateRoute({ authenticated, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}