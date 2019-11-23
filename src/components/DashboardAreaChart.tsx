import React from "react";
import {AreaChart} from "./AreaChart";
import {useSelector} from "react-redux";

export const DashboardAreaChart: React.FunctionComponent = props => {
    const expenses = useSelector((state: any) => (state.dashboard.balances));

    let dates: any = Object.keys(expenses);
    let values: any = [];
    Object.values(expenses).forEach((a: any) => {
        values.push(a['balance']/100);
    });

    return (<AreaChart
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
            />
        );
};