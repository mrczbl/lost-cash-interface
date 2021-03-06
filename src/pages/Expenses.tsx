import React, {useEffect} from "react";
import {SideBar} from "../components/SideBar";
import {TopBar} from "../components/TopBar";
import {TextIconWidget} from "../components/Base/TextIconWidget";
import {TextChildWidget} from "../components/Base/TextChildWidget";
import {useDispatch, useSelector} from "react-redux";
import {requestExpenses} from "../global/actions";
import "react-toastify/dist/ReactToastify.css";
import {Table} from "../components/Base/Table";

export const Expenses: React.FunctionComponent = (props) => {
    const dispatch = useDispatch();
    const expenses = useSelector((state: any) => (state.expenses));

    useEffect(() => {
        dispatch(requestExpenses({prevLimit: 20, limit: 20, offset: 0}))
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
                                    Expenses
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
                                    title={'Biggest expense'}
                                    type={'primary'}
                                    unit={'$'}
                                />
                                <TextIconWidget
                                    amount={215000}
                                    icon={'fa-dollar-sign'}
                                    title={'Bookmarked expenses'}
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
                                    title={'Categories'}
                                    type={'warning'}
                                    unit={''}
                                />
                            </div>

                            <div className="row">
                                <Table
                                    header={"Expenses"}
                                    selection={expenses.selection}
                                    items={expenses.items}
                                />
                            </div>

                            <div className="row">
                                <div className={"col-xs-12"}>
                                    {/*todo pagination*/}
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
        </div>
    );
};