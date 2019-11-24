import React from "react";
import {Line} from "react-chartjs-2";

interface AreaChartProps {
    data: object,
    title: string,
    unit: string,
}

export const AreaChart: React.FunctionComponent<AreaChartProps> = (props) => {
    return (
        <div className="chart-area">
            <Line
                height={95}
                options={{
                    legend: {
                        display: false
                    }
                }}
                data={props.data}
            />
        </div>
    )
};