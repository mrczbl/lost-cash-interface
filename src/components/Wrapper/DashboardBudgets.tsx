import {ProgressBar} from "../Base/ProgressBar";
import {VariableCard} from "../Base/VariableCard";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ToolTip} from "../Base/ToolTip";
import {updateDashboardBudgets} from "../../global/actions";

export const DashboardBudgets = () => {
    const budgets = useSelector((state: any) => (state.dashboard.budgets));
    const period = useSelector((state: any) => (state.dashboard.periods.budgets));
    const dispatch = useDispatch();

    let progressBars;
    if (budgets.length < 1) {
        progressBars = <ProgressBar
            title={"No Data found"}
            message={"0%"}
            min={0}
            max={100}
            current={0}
        />
    } else {
        progressBars = budgets.map((budget: any, b: any) => {
            return <ProgressBar
                key={b}
                title={budget.name}
                message={(!!budget.total ? Math.round(Math.min(1, budget.total / budget[period]) * 100) + "%" : "0%")}
                min={0}
                max={100}
                current={(!!budget.total ? Math.round(Math.min(1, budget.total / budget[period]) * 100) : 0)}
            />
        });
    }

    return (
        <VariableCard
            bootstrap={{
                xs: 12,
                lg: 6,
            }}
            body={progressBars}
            title={'Budgets'}
            tooltip={<ToolTip
                offsetY={5}
                offsetX={-130}
                id={"dashboard-balances"}
                menu={{
                    title: "Change Period",
                    items: {
                        'week': {
                            'active': (period === 'week'),
                            'label': 'Week',
                            'action': () => {
                                dispatch(updateDashboardBudgets('week'))
                            },
                        },
                        'day': {
                            'active': (period === 'day'),
                            'label': 'Day',
                            'action': () => {
                                dispatch(updateDashboardBudgets('day'))
                            },
                        },
                        'month': {
                            'active': (period === 'month'),
                            'label': 'Month',
                            'action': () => {
                                dispatch(updateDashboardBudgets('month'))
                            },
                        }
                    }
                }}
            />}
        />
    );
};