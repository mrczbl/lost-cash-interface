import React from "react";
import {Doughnut} from "react-chartjs-2";

interface DonutChartProps {
    data: object,
    title: string,
    unit: string,
    labels?: any,
}

export const DonutChart: React.FunctionComponent<DonutChartProps> = (props) => {
    const colors = {
        'primary': '#4e73df',
        'success': '#1cc88a',
        'info': '#36b9cc',
        'warning': '#f6c23e',
        'danger': '#e74a3b',
        'secondary': '#858796'
    };

    return (
        <div className="card-body">
            <div className="chart-pie pt-2 pb-2">
                <Doughnut
                    height={110}
                    options={{
                        legend: {
                            display: false
                        },
                    }}
                    data={{
                        labels: Object.keys(props.data),
                        datasets: [{
                            data: Object.values(props.data),
                            backgroundColor: Object.values(colors),
                            hoverBackgroundColor: Object.values(colors)
                        }]
                    }}
                />
            </div>
            <div className="mt-4 text-center small">
                {Object.keys(props.data).map((a, b) => {
                        return <span key={b} className="mr-2">
                            <i className={"fas fa-circle text-" + Object.keys(colors)[b]} />
                            &nbsp;{a}
                        </span>
                })}
            </div>
        </div>
    )
};