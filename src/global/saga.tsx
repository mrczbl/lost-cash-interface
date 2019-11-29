import {all} from 'redux-saga/effects'
import {DashboardSaga} from "./saga/DashboardSaga";
import {ExpensesSaga} from "./saga/ExpensesSaga";

export function* rootSaga() {
    yield all([
        DashboardSaga(),
        ExpensesSaga()
    ]);
}