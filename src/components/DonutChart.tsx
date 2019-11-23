import React from "react";
import {Doughnut} from "react-chartjs-2";

interface DonutChartProps {
    data: object,
    title: string,
    unit: string,
}

export const DonutChart: React.FunctionComponent<DonutChartProps> = (props) => {
    return (
        <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
                {/*// <!-- Card Header - Dropdown -->*/}
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Expenditures</h6>
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
                {/*// <!-- Card Body -->*/}
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
                                labels: [
                                    'Red',
                                    'Green',
                                    'Yellow'
                                ],
                                datasets: [{
                                    data: [300, 50, 100],
                                    backgroundColor: [
                                        '#FF6384',
                                        '#36A2EB',
                                        '#FFCE56'
                                    ],
                                    hoverBackgroundColor: [
                                        '#FF6384',
                                        '#36A2EB',
                                        '#FFCE56'
                                    ]
                                }]
                            }}
                        />
                    </div>
                    <div className="mt-4 text-center small">
                        <span className="mr-2">
                            <i className="fas fa-circle text-primary"></i>
                            &nbsp;Direct
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-success"></i>
                            &nbsp;Social
                        </span>
                        <span className="mr-2">
                            <i className="fas fa-circle text-info"></i>
                            &nbsp;Referral
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}