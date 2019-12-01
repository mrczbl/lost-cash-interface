import React, {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";

export const SideBar: React.FunctionComponent = (props) => {
    const [toggleClass, setToggleClass] = useState("");
    const history = useHistory();
    const location = useLocation();

    const toggleSideBar = () => setToggleClass((toggleClass === "" ? "toggled" : ""));
    return (
        <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + toggleClass}
            id="accordionSidebar"
            style={{transition: "0.3s all ease-in-out"}}
        >
            {/*// <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Lost Cash</div>
            </a>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider my-0"/>

            {/*todo set active route li active class*/}
            {/*// <!-- Nav Item - Dashboard -->*/}
            <li className={"nav-item " + (location.pathname === '/' ? 'active' : '')}>
                <div
                    className={"nav-link "}
                    onClick={() => history.push('/')}
                >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </div>
            </li>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*// <!-- Heading -->*/}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*// <!-- Nav Item - Pages Collapse Menu -->*/}
            <li className={"nav-item " + (location.pathname === '/budgets' ? 'active' : '')}>
                <div
                    className={"nav-link "}
                    onClick={() => history.push('/budgets')}
                >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Budgets</span>
                </div>
            </li>

            {/*// <!-- Nav Item - Utilities Collapse Menu -->*/}
            <li className={"nav-item " + (location.pathname === '/expenses' ? 'active' : '')}>
                <div
                    className={"nav-link "}
                    onClick={() => history.push('/expenses')}
                >
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Expenses</span>
                </div>
            </li>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*// <!-- Heading -->*/}
            <div className="sidebar-heading">
                Profile
            </div>

            {/*// <!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
                <div
                    className="nav-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                >
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Settings</span>
                </div>
            </li>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/*// <!-- Sidebar Toggler (Sidebar) -->*/}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleSideBar}></button>
            </div>

        </ul>

    )
};
