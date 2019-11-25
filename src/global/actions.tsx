import {types} from './types';

export const setToken = (token: string) => {
    return {
        type: types.TOKEN_SET,
        payload: {token},
        meta: {type: types.TOKEN_SET}
    }
};

export const setRefreshToken = (token: string) => {
    return {
        type: types.REFRESH_TOKEN_SET,
        payload: {token},
        meta: {type: types.REFRESH_TOKEN_SET}
    }
};

export const requestDashboard = (period: any) => {
    return {
        type: types.DASHBOARD_REQUEST,
        payload: period,
        meta: {types: types.DASHBOARD_REQUEST}
    }
};

export const setDashboard = (dashboard: any) => {
    return {
        type: types.DASHBOARD_SET,
        payload: dashboard,
        meta: {types: types.DASHBOARD_SET}
    }
};

export const setPopupError = (message: string) => {
    return {
        type: types.POPUP_ERROR_SET,
        payload: {message},
        meta: {types: types.POPUP_ERROR_SET}
    }
};

export const setUserLogin = (name: string, email: string) => {
    return {
        type: types.USER_LOGIN,
        payload: {name, email},
        meta: {types: types.USER_LOGIN}
    }
};

export const setUserLogout = () => {
    return {
        type: types.USER_LOGOUT,
        payload: {},
        meta: {types: types.USER_LOGOUT}
    }
};

export const updateDashboardBudgets = (period: string) => {
    return {
        type: types.DASHBOARD_UPDATE_BUDGETS,
        payload: period,
        meta: {types: types.DASHBOARD_UPDATE_BUDGETS}
    }
};
