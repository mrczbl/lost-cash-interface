import React from "react";
import {AreaChart} from "../Base/AreaChart";
import {useSelector} from "react-redux";
import {VariableCard} from "../Base/VariableCard";
import {ToolTip} from "../Base/ToolTip";

export const DashboardAreaChart: React.FunctionComponent = props => {
    const expenses = useSelector((state: any) => (state.dashboard.balances));

    let dates: any = Object.keys(expenses);
    let values: any = [];
    Object.values(expenses).forEach((a: any) => {
        values.push(a['balance'] / 100);
    });

    return (
        <VariableCard
            bootstrap={{
                xs: 12,
                lg: 7,
                xl: 8
            }}
            title={"Balances"}
            body={<AreaChart
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: 'Balance',
                            backgroundColor: 'rgba(78,115,223,0.2)',
                            borderColor: 'rgb(78,115,223)',
                            borderWidth: 2,
                            hoverBackgroundColor: 'rgba(255,116,0,0.4)',
                            hoverBorderColor: 'rgb(255,116,0)',
                            data: values
                        }
                    ]
                }}
                title={'Balance Progress'}
                unit={'EUR'}
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