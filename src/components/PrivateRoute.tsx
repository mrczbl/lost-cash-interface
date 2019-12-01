import {Redirect, Route} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

// @ts-ignore
export function PrivateRoute({authenticated, children, ...rest}) {
    const user = useSelector((state: any) => (state.user));

    return user.confirming
        ? <div>Loading credentials...</div>
        : <Route
            {...rest}
            render={({location}) =>
                authenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />;
}