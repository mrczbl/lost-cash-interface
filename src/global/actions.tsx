import {types} from './types';

export const setToken = (token: string) => ({
    type: types.TOKEN_SET,
    payload: {token},
    meta: {type: types.TOKEN_SET}
});

export const setRefreshToken = (token: string) => ({
    type: types.REFRESH_TOKEN_SET,
    payload: {token},
    meta: {type: types.REFRESH_TOKEN_SET}
});

export const requestExpenses = (options: any) => ({
    type: types.EXPENSES_REQUEST,
    payload: options,
    meta: {types: types.EXPENSES_REQUEST}
});

export const setExpenses = (expenses: any) => ({
    type: types.EXPENSES_SET,
    payload: expenses,
    meta: {types: types.EXPENSES_SET}
});

export const requestBudgets = (period: any) => ({
    type: types.BUDGETS_REQUEST,
    payload: period,
    meta: {types: types.BUDGETS_REQUEST}
});

export const setBudgets = (period: any) => ({
    type: types.BUDGETS_SET,
    payload: period,
    meta: {types: types.BUDGETS_SET}
});

export const requestDashboard = (period: any) => ({
    type: types.DASHBOARD_REQUEST,
    payload: period,
    meta: {types: types.DASHBOARD_REQUEST}
});

export const setDashboard = (dashboard: any) => ({
    type: types.DASHBOARD_SET,
    payload: dashboard,
    meta: {types: types.DASHBOARD_SET}
});

export const setPopupError = (message: string) => ({
    type: types.POPUP_ERROR_SET,
    payload: {message},
    meta: {types: types.POPUP_ERROR_SET}
});

export const setUserLogin = (name: string, email: string) => ({
    type: types.USER_LOGIN,
    payload: {name, email},
    meta: {types: types.USER_LOGIN}
});

export const setUserLogout = () => ({
    type: types.USER_LOGOUT,
    payload: {},
    meta: {types: types.USER_LOGOUT}
});

export const updateDashboardBudgets = (period: string) => ({
    type: types.DASHBOARD_UPDATE_BUDGETS,
    payload: period,
    meta: {types: types.DASHBOARD_UPDATE_BUDGETS}
});

export const setConfirming = (confirming: boolean) => ({
    type: types.CONFIRMING_SET,
    payload: confirming,
    meta: {types: types.CONFIRMING_SET}
});