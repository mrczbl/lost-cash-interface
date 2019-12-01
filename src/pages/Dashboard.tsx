import React, {useEffect} from "react";
import {SideBar} from "../components/SideBar";
import {TopBar} from "../components/TopBar";
import {TextIconWidget} from "../components/Base/TextIconWidget";
import {TextChildWidget} from "../components/Base/TextChildWidget";
import {TextCard} from "../components/Base/TextCard";
import {DashboardAreaChart} from "../components/Wrapper/DashboardAreaChart";
import {DashboardDonutChart} from "../components/Wrapper/DashboardDonutChart";
import {useDispatch} from "react-redux";
import {requestDashboard} from "../global/actions";
import {DashboardBudgets} from "../components/Wrapper/DashboardBudgets";
import "react-toastify/dist/ReactToastify.css";
import {useHistory} from "react-router-dom";

export const Dashboard: React.FunctionComponent = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(requestDashboard({
            balances: "week",
            categories: "week",
            budgets: "week"
        }))
    }, [dispatch]);

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

    const AboutUsText = <p>Track your expenses easily and have a great overview. You can not only
        track it but also categorize it in general groups with subgroups. For
        exmaple Food as a general group and groceries, eating-out and
        snacks as subgroups. If there is anything missing or you would like to
        give us some feedback do so&nbsp;
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://mzabel.com/">heeeere</a>.
        We'd love to here your opinion.
    </p>;

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
                                    Dashboard
                                </h1>
                                <div
                                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                                    onClick={() => history.push('/add')}
                                >
                                    <i className="fas fa-plus fa-sm text-white-50"></i>
                                    &nbsp;&nbsp;Add Expense
                                </div>
                            </div>

                            <div className="row">
                                <TextIconWidget
                                    amount={40000}
                                    icon={'fa-calendar'}
                                    title={'Earnings (Monthly)'}
                                    type={'primary'}
                                    unit={'$'}
                                />
                                <TextIconWidget
                                    amount={215000}
                                    icon={'fa-dollar-sign'}
                                    title={'Earnings (Annual)'}
                                    type={'success'}
                                    unit={'$'}
                                />
                                <TextChildWidget
                                    icon={'fa-clipboard-list'}
                                    title={'Tasks'}
                                    type={'info'}
                                    child={ProgressBarWidget}
                                />
                                <TextIconWidget
                                    amount={18}
                                    icon={'fa-comments'}
                                    title={'Pending Requests'}
                                    type={'warning'}
                                    unit={''}
                                />
                            </div>

                            <div className="row">
                                <DashboardAreaChart/>
                                <DashboardDonutChart/>
                            </div>

                            <div className="row">
                                <DashboardBudgets/>

                                <div className="col-lg-6 mb-4">
                                    <TextCard
                                        title={"About us"}
                                        image={""}
                                        text={AboutUsText}
                                    />
                                </div>
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

            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};