import {BASE_URL} from "../global/urls";
import axios from 'axios';
import {store} from "../global/store";
import {setToken, setRefreshToken} from "../global/actions";

interface loginOptions {
    email: string,
    password: string
}

interface fetchDataOptions {
    url: string,
    data: any,
    timeout: number,
    isPost: boolean
}

export function loginUser(options: loginOptions) {
    return new Promise(async (resolve, reject) => {
        try {
            let result: any = await fetchData({
                url: '/authentication/login',
                data: options,
                timeout: 5000,
                isPost: true
            });

            if(!result.error) {
                store.dispatch(setToken(result.token));
                store.dispatch(setRefreshToken(result.refresh_token));
                resolve(result);
            } else {
                reject(result);
            }
        } catch (error) {
            reject(error);
        }
    });
}

export function apiRequest(options: fetchDataOptions) {
    return new Promise(async (resolve, reject) => {
        try {
            let result: any = await fetchData(options);
            resolve(result);
        } catch (error) {
            try {
                if (error.response.data.code === "invalid_token") {
                    await refreshToken();
                    let result = await fetchData(options);
                    resolve(result);
                } else {
                    reject(error);
                }
            } catch (error) {
                reject(error);
            }
        }
    });
}

export function fetchData(options: fetchDataOptions) {
    return new Promise(async (resolve, reject) => {
        try {
            const state = store.getState();
            const token = state.auth.token;
            const result: any = await axios({
                url: BASE_URL + options.url,
                timeout: options.timeout,
                method: (options.isPost ? 'POST' : 'GET'),
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                data: options.data
            });
            const data = await result.data;
            if (!data.error) {
                resolve(data);
            } else {
                reject(data);
            }
        } catch (error) {
            reject(error);
        }
    });
}

export function refreshToken() {
    return new Promise(async (resolve, reject) => {
        try {
            const state = store.getState();
            const result: any = await axios({
                url: BASE_URL + '/authentication/refresh',
                timeout: 5000,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: { email: state.user.email, refresh_token: state.auth.refresh_token }
            });
            const data: any = await result.data;
            if (!data.error) {
                store.dispatch(setToken(data.token));
                resolve(data);
            } else {
                reject(data.message);
            }
        } catch (error) {
            reject(error);
        }
    });
}