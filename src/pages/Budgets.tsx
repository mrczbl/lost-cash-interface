import React, {useEffect} from "react";
import {SideBar} from "../components/SideBar";
import {TopBar} from "../components/TopBar";
import {TextIconWidget} from "../components/Base/TextIconWidget";
import {TextChildWidget} from "../components/Base/TextChildWidget";
import {useDispatch} from "react-redux";
import {requestBudgets} from "../global/actions";
import {Toast} from "../components/Wrapper/Toast";
import "react-toastify/dist/ReactToastify.css";

export const Budgets: React.FunctionComponent = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestBudgets({period: "week"}))
    });

    const ProgressBarWidget = <div className="row no-gutters align-items-center">
        <div className="col-auto">
            <div
                className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%
            </div>
        </div>
        <div className="col">
            <div className="progress progress-sm mr-2">
                <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{width: "50%"}}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                </div>
            </div>
        </div>
    </div>;


    return (
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar/>

                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">
                                    Budgets
                                </h1>
                                <div className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                    <i className="fas fa-download fa-sm text-white-50"></i>
                                    Generate Report
                                </div>
                            </div>

                            <div className="row">
                                <TextIconWidget
                                    amount={40000}
                                    icon={'fa-calendar'}
                                    title={'Total Budget (Monthly)'}
                                    type={'primary'}
                                    unit={'$'}
                                />
                                <TextIconWidget
                                    amount={215000}
                                    icon={'fa-dollar-sign'}
                                    title={'Total Budget (Annual)'}
                                    type={'success'}
                                    unit={'$'}
                                />
                                <TextChildWidget
                                    icon={'fa-clipboard-list'}
                                    title={'Remain'}
                                    type={'info'}
                                    child={ProgressBarWidget}
                                />
                                <TextIconWidget
                                    amount={18}
                                    icon={'fa-comments'}
                                    title={'Budets'}
                                    type={'warning'}
                                    unit={''}
                                />
                            </div>

                            <div className="row">
                                {/*todo table for budgets*/}
                            </div>

                            <div className="row">
                                {/*todo pagination*/}
                            </div>
                        </div>
                    </div>

                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; mzabel.com 2019</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <Toast />
        </div>
    );
};