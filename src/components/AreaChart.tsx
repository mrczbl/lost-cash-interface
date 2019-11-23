import React from "react";
import {Line} from "react-chartjs-2";

interface AreaChartProps {
    data: object,
    title: string,
    unit: string,
}

export const AreaChart: React.FunctionComponent<AreaChartProps> = (props) => {
    return (
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="\\localhost:3000" role="button"
                           id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="\\localhost:3000">Action</a>
                            <a className="dropdown-item" href="\\localhost:3000">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="\\localhost:3000">Something else here</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
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
                </div>
            </div>
        </div>
    )
}