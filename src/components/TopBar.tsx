import React from "react";
import {ToolTip} from "./Base/ToolTip";
import {useSelector, useDispatch} from "react-redux";
import {setUserLogout} from "../global/actions";

export function TopBar() {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => (state.user));
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            {/*// <!-- Sidebar Toggle (Topbar) -->*/}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            {/*// <!-- Topbar Search -->*/}
            <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small"
                           placeholder="Search for..." aria-label="Search"
                           aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            {/*// <!-- Topbar Navbar -->*/}
            <ul className="navbar-nav ml-auto">

                {/*// <!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="\\localhost:3000" id="searchDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/*// <!-- Dropdown - Messages -->*/}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                         aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                       placeholder="Search for..." aria-label="Search"
                                       aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/*// <!-- Nav Item - Alerts -->*/}
                <li className="nav-item dropdown no-arrow mx-1">
                    <ToolTip
                        offsetY={0}
                        icon={<div className={'nav-link'}><i className="fas fa-bell fa-fw"/><span
                            className="badge badge-success badge-counter">1</span></div>}
                        id={'alert_center'}
                        menu={{
                            title: 'Alert Center',
                            items: {
                                'first': {
                                    'label': 'A new monthly report is ready to download!',
                                    'action': () => {
                                    }
                                }
                            }
                        }}
                    />
                </li>

                {/*// <!-- Nav Item - Messages -->*/}
                <li className="nav-item dropdown no-arrow mx-1">
                    <ToolTip
                        offsetY={0}
                        icon={<div className={'nav-link'}><i className="fas fa-envelope fa-fw"/><span
                            className="badge badge-danger badge-counter">1</span></div>}
                        id={'alert_center'}
                        menu={{
                            title: 'Message Center',
                            items: {
                                'first': {
                                    'label': 'A new monthly report is ready to download!',
                                    'action': () => {
                                    }
                                }
                            }
                        }}
                    />
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/*// <!-- Nav Item - User Information -->*/}
                <li className="nav-item dropdown no-arrow">
                    <ToolTip
                        offsetY={0}
                        icon={<div className={'nav-link'}>
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                {user.name}
                            </span>
                            <img className="img-profile rounded-circle"
                                 src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt={"circle"}/></div>}
                        id={'alert_center'}
                        menu={{
                            title: 'Account',
                            items: {
                                'profile': {
                                    'label': 'Profile',
                                    'action': () => {
                                    }
                                },
                                'settings': {
                                    'label': 'Settings',
                                    'action': () => {
                                    }
                                },
                                'activity_log': {
                                    'label': 'Activity Log',
                                    'action': () => {
                                    }
                                },
                                'logout': {
                                    'label': 'Logout',
                                    'action': () => { dispatch(setUserLogout()); }
                                }
                            }
                        }}
                    />
                </li>
            </ul>
        </nav>
    )
}