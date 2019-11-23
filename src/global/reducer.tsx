import {types} from "./types";

const INITIAL_STATE = {
    auth: {
        loggedIn: false,
        token: null,
        refresh_token: null
    },
    user: {
        first: "",
        last: "",
        email: ""
    },
    dashboard: {
        balances: {
            'Monday': {
                balance: 0,
            },
            'Tuesday': {
                balance: 0,
            },
            'Wednesday': {
                balance: 0,
            },
            'Thursday': {
                balance: 0,
            },
            'Friday': {
                balance: 0,
            },
            'Saturday': {
                balance: 0,
            },
            'Sunday': {
                balance: 0,
            }
        }
    }
};

interface MetaType {
    type: string
}

interface ReducerAction {
    type: string,
    payload: any,
    meta: MetaType,
}

export const reducer = (state = INITIAL_STATE, action: ReducerAction) => {
    console.log(action);
    switch (action.type) {
        case types.TOKEN_SET:
            return Object.assign({}, state, {auth: {...state.auth, loggedIn: true, token: action.payload.token}});

        case types.REFRESH_TOKEN_SET:
            return Object.assign({}, state, {auth: {...state.auth, refresh_token: action.payload.token}});

        case types.DASHBOARD_SET:
            return Object.assign({}, state, {dashboard: {...state.dashboard, balances: action.payload.dashboard.balances}});

        case types.USER_LOGIN:
            return Object.assign({}, state, {user: action.payload});

        default:
            return state;
    }
};