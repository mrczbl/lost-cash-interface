import React from "react";
import {useSelector} from "react-redux";
import {VariableCard} from "../Base/VariableCard";
import {ToolTip} from "../Base/ToolTip";
import {DonutChart} from "../Base/DonutChart";

export const DashboardDonutChart: React.FunctionComponent = props => {
    const categories = useSelector((state: any) => (state.dashboard.categories));

    return (
        <VariableCard
            bootstrap={{
                xs: 12,
                lg: 5,
                xl: 4
            }}
            title={"Balances"}
            body={<DonutChart
                data={categories}
                title={'Expenditures'}
                unit={'Euro'}
            />}
            tooltip={<ToolTip
                offsetY={5}
                offsetX={-130}
                id={"dashboard-balances"}
                menu={{
                    title: "Change Period",
                    items: {
                        'week': {
                            'label': 'Week',
                            'action': () => console.log('week'),
                        },
                        'day': {
                            'label': 'Day',
                            'action': () => console.log('day')
                        },
                        'month': {
                            'label': 'Month',
                            'action': () => console.log('month')
                        }
                    }
                }}
            />}
        />
    );
};