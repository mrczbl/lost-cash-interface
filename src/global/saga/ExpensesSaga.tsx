import {all, call, fork, put, take} from "redux-saga/effects";
import {types} from "../types";
import {setExpenses, setPopupError} from "../actions";
import {apiRequest} from "../../helper/ApiRequest";
import {toast} from "react-toastify";

export function* ExpensesSaga() {
    while (true) {
        const data = yield take(types.EXPENSES_REQUEST);
        yield fork(getExpenses, data.payload);
    }
}

export function* getExpenses({prevLimit = 20, limit = 20, offset = 0}) {
    try {
        let [expenses] = yield all([
            call(apiRequest, {
                url: '/expense/limit',
                data: {
                    limit: limit,
                    offset: Math.floor((prevLimit * offset) / limit) * limit
                },
                timeout: 5000,
                isPost: true
            }),
        ]);
        yield put(setExpenses({expenses}));
    } catch (error) {
        toast.error("Network Error");
        yield put(setPopupError(error.message));
    }
}
