import {all, call, fork, put, take} from "redux-saga/effects";
import {types} from "../types";
import {setDashboard, setPopupError} from "../actions";
import {apiRequest} from "../../helper/ApiRequest";
import {toast} from "react-toastify";

export function* DashboardSaga() {
    while (true) {
        const data = yield take(types.DASHBOARD_REQUEST);
        yield fork(getDashboard, data.payload);
    }
}

export function* getDashboard({balancesPeriod = "week", categoriesPeriod = "week", barsPeriod = "week"}) {
    try {
        let [balances, categories, budgets] = yield all([
            call(apiRequest, {
                url: '/expense/dashboard/balance',
                data: {
                    period: balancesPeriod
                },
                timeout: 5000,
                isPost: true
            }),
            call(apiRequest, {
                url: '/expense/dashboard/category',
                data: {
                    period: categoriesPeriod,
                },
                timeout: 5000,
                isPost: true
            }),
            call(apiRequest, {
                url: '/expense/dashboard/budgets',
                data: {
                    period: categoriesPeriod,
                },
                timeout: 5000,
                isPost: true
            }),
        ]);
        yield put(setDashboard({balances, categories, budgets}));
    } catch (error) {
        toast.error("Network Error");
        yield put(setPopupError(error.message));
    }
}
