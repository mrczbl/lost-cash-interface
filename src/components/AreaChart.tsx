import React from "react";
import {Doughnut, Line} from "react-chartjs-2";

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
                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="" role="button"
                           id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Dropdown Header:</div>
                            <a className="dropdown-item" href="">Action</a>
                            <a className="dropdown-item" href="">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Something else here</a>
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
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        label: 'Balance',
                                        backgroundColor: 'rgba(78,115,223,0.2)',
                                        borderColor: 'rgb(78,115,223)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255,116,0,0.4)',
                                        hoverBorderColor: 'rgb(255,116,0)',
                                        data: [65, 59, 80, 81, 56, 55, 40, 12, 50, 73]
                                    }
                                ]
                            }}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}