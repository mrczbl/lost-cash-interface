import React, { useState } from "react";
import '../styles/sidebar.css';

export const SideBar: React.FunctionComponent = (props) => {
    const [marginLeft, setMarginLeft] = useState("0");

    const hideSideBar = () => setMarginLeft("-14rem");
    const showSideBar = () => setMarginLeft("0");

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
            style={{ marginLeft: marginLeft, transition: "0.3s all ease-in-out", position: 'relative' }}
        >
            <div
                className="sidebar-lasche"
                style={{ display: (marginLeft === "0" ? 'none' : '') }}
                onClick={showSideBar}
            >
                <button className="rounded-circle border-0 fa-rotate-180" id="sidebarToggle" onClick={showSideBar}></button>
            </div>

            {/*// <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Lost Cash</div>
            </a>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider my-0"/>

            {/*// <!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*// <!-- Heading -->*/}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*// <!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse"
                   data-target="#collapseTwo"
                   aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Categories</span>
                </a>
            </li>

            {/*// <!-- Nav Item - Utilities Collapse Menu -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse"
                   data-target="#collapseUtilities" aria-expanded="true"
                   aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Expenses</span>
                </a>
            </li>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*// <!-- Heading -->*/}
            <div className="sidebar-heading">
                Profile
            </div>

            {/*// <!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse"
                   data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Settings</span>
                </a>
            </li>

            {/*// <!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/*// <!-- Sidebar Toggler (Sidebar) -->*/}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={hideSideBar}></button>
            </div>

        </ul>

    )
};
