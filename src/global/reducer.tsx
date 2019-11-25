import {types} from "./types";
import {REHYDRATE} from "redux-persist/lib/constants";

const INITIAL_STATE = {
    auth: {
        loggedIn: false,
        token: null,
        refresh_token: null
    },
    user: {
        first: "Max",
        last: "Muster",
        email: "max@muster.de"
    },
    dashboard: {
        periods: {
            balances: 'week',
            categories: 'week',
            budgets: 'week'
        },
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
        },
        categories: {
            'Loading': 1,
        },
        budgets: [{
            "id": 0,
            "name": "Loading",
            "total": 0,
            "day": 100,
            "week": 100,
            "month": 100
        }, {
            "id": 0,
            "name": "Loading",
            "total": 0,
            "day": 100,
            "week": 100,
            "month": 100
        }, {
            "id": 0,
            "name": "Loading",
            "total": 0,
            "day": 100,
            "week": 100,
            "month": 100
        }, {
            "id": 0,
            "name": "Loading",
            "total": 0,
            "day": 100,
            "week": 100,
            "month": 100
        }, {
            "id": 0,
            "name": "Loading",
            "total": 0,
            "day": 100,
            "week": 100,
            "month": 100
        }]
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
        case REHYDRATE:
            return Object.assign({}, state, {auth: (!!action.payload ? {...state.auth, ...action.payload.auth} : state.auth)});

        case types.DASHBOARD_REQUEST:
            return Object.assign({}, state, {dashboard: { ...state.dashboard, periods: action.payload }});

        case types.TOKEN_SET:
            return Object.assign({}, state, {auth: {...state.auth, token: action.payload.token }});

        case types.REFRESH_TOKEN_SET:
            return Object.assign({}, state, {auth: {...state.auth, refresh_token: action.payload.token}});

        case types.DASHBOARD_SET:
            let expenses = action.payload.categories.expenses;
            if (Object.keys(expenses).length === 0) {
                expenses = {'No Data found': '1'}
            }

            return Object.assign({}, state, {
                dashboard: {
                    ...state.dashboard,
                    balances: action.payload.balances.balances,
                    categories: expenses,
                    budgets: action.payload.budgets.budgets,
                }
            });

        case types.DASHBOARD_UPDATE_BUDGETS: {
            return Object.assign({}, state, {
                dashboard: {
                    ...state.dashboard,
                    periods: {
                        ...state.dashboard.periods,
                        budgets: action.payload
                    }
                }
            });
        }

        case types.USER_LOGIN:
            return Object.assign({}, state, {user: action.payload}, {auth: {...state.auth, loggedIn: true}});

        case types.USER_LOGOUT:
            return INITIAL_STATE;

        default:
            return state;
    }
};