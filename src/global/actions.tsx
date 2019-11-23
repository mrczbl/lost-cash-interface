import {types} from './types';
import { toast } from "react-toastify";

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

export const setDashboard = (dashboard: any) => {
    return {
        type: types.DASHBOARD_SET,
        payload: {dashboard},
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

export const setUserLogin = (first: string, last: string, email: string) => {
    return {
        type: types.USER_LOGIN,
        payload: {first, last, email},
        meta: {types: types.USER_LOGIN}
    }
};

export const setPopupRemove = (message: string) => {
    return {
        type: types.POPUP_ERROR_REMOVE,
        payload: {},
        meta: {types: types.POPUP_ERROR_REMOVE}
    }
};
