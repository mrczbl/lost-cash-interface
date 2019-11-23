import {all} from 'redux-saga/effects'
import {DashboardSaga} from "./saga/DashboardSaga";

export function* rootSaga() {
    yield all([
        DashboardSaga()
    ]);
}