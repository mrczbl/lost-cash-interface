import {ProgressBar} from "../Base/ProgressBar";
import {VariableCard} from "../Base/VariableCard";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ToolTip} from "../Base/ToolTip";
import {updateDashboardBudgets} from "../../global/actions";

export const DashboardBudgets = () => {
    const budgets = useSelector((state: any) => (state.dashboard.budgets));
    const period = useSelector((state: any) => (state.dashboard.periods.budgets));
    const dispatch = useDispatch();

    const progressBars = budgets.map((budget: any, b: any) => {
        return <ProgressBar
            key={b}
            title={budget.name}
            message={Math.round(Math.min(1, budget.total / budget[period]) * 100) + "%"}
            min={0}
            max={100}
            current={Math.round(Math.min(1, budget.total / budget[period]) * 100)}
        />
    });

    return (
        <VariableCard
            bootstrap={{
                xs: 12,
                lg: 6,
                md: 4
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
                            'action': () => { dispatch(updateDashboardBudgets('week'))},
                        },
                        'day': {
                            'active': (period === 'day'),
                            'label': 'Day',
                            'action': () => { dispatch(updateDashboardBudgets('day'))},
                        },
                        'month': {
                            'active': (period === 'month'),
                            'label': 'Month',
                            'action': () => { dispatch(updateDashboardBudgets('month'))},
                        }
                    }
                }}
            />}
        />
    );
};