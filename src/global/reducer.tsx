import {types} from "./types";
import {REHYDRATE} from "redux-persist/lib/constants";
import moment from "moment";

const INITIAL_STATE = {
    auth: {
        token: null,
        refresh_token: null
    },
    user: {
        loggedIn: false,
        confirming: true,
        name: "Max Muster",
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
    },
    expenses: {
        selection: {
            total: 0,
            entries: 20,
            current: 1,
            pages: 1,
        },
        items: {
            [moment().toString()]: [
                {
                    "id": 0,
                    "amount": 'AMOUNT',
                    "currency": "EUR",
                    "date": moment().toString(),
                    "deleted": null,
                    "category": 0,
                    "name": "LOADING"
                }, {
                    "id": 0,
                    "amount": 'AMOUNT',
                    "currency": "EUR",
                    "date": moment().toString(),
                    "deleted": null,
                    "category": 0,
                    "name": "LOADING"
                }, {
                    "id": 0,
                    "amount": 'AMOUNT',
                    "currency": "EUR",
                    "date": moment().toString(),
                    "deleted": null,
                    "category": 0,
                    "name": "LOADING"
                }
            ]
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
    switch (action.type) {
        case REHYDRATE:
            return Object.assign({}, state, {auth: (!!action.payload ? {...state.auth, ...action.payload.auth} : state.auth)});

        case types.DASHBOARD_REQUEST:
            return Object.assign({}, state, {dashboard: {...state.dashboard, periods: action.payload}});

        case types.TOKEN_SET:
            return Object.assign({}, state, {auth: {...state.auth, token: action.payload.token}});

        case types.REFRESH_TOKEN_SET:
            return Object.assign({}, state, {auth: {...state.auth, refresh_token: action.payload.token}});

        case types.EXPENSES_REQUEST:
            return Object.assign({},
                state,
                {
                    expenses: {
                        ...state.expenses,
                        items: INITIAL_STATE.expenses.items,
                        selection: {
                            ...state.expenses.selection,
                            entries: action.payload.limit,
                            current: Math.floor((action.payload.prevLimit * action.payload.offset) / action.payload.limit) + 1,
                        }
                    }
                }
            );

        case types.EXPENSES_SET:
            return Object.assign({},
                state,
                {
                    expenses: {
                        ...state.expenses,
                        selection: {
                            ...state.expenses.selection,
                            total: action.payload.expenses.expenses.total,
                            pages: Math.max(1, Math.ceil(action.payload.expenses.expenses.total / state.expenses.selection.entries))
                        },
                        items: action.payload.expenses.expenses.items
                    }
                }
            );

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

        case types.CONFIRMING_SET:
            return Object.assign({}, state, {user: {...state.user, confirming: action.payload.confirming}});

        case types.USER_LOGIN:
            return Object.assign({}, state, {user: {...state.user, loggedIn: true, ...action.payload}});

        case types.USER_LOGOUT:
            return INITIAL_STATE;

        default:
            return state;
    }
};
