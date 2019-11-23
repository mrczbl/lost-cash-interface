import {call, fork, put, select, take} from "redux-saga/effects";
import {types} from "../types";
import {setDashboard, setPopupError} from "../actions";
import {apiRequest} from "../../helper/ApiRequest";
import {toast} from "react-toastify";

const getToken = (state: any) => state.auth.token;

export function* DashboardSaga() {
    yield fork(initialDashboardSaga);
    while (true) {
        const data = yield take(types.DASHBOARD_REQUEST);
        yield fork(getDashboard, data.payload);
    }
}

export function* initialDashboardSaga() {
    const token = yield select(getToken);
    if (token) {
        yield fork(getDashboard);
    } else {
        while (true) {
            yield take(types.TOKEN_SET);
            yield fork(getDashboard);
        }
    }
}

export function* getDashboard(payload = {}) {
    try {
        let data;
        data = yield call(apiRequest, {
            url: '/expense/balance/week',
            data: {
                email: 'max@muster.de',
                password: 'passworda'
            },
            timeout: 5000,
            isPost: true
        });
        yield put(setDashboard(data));
    } catch (error) {
        toast.warn("Network Error");
        yield put(setPopupError(error.message));
    }
}
