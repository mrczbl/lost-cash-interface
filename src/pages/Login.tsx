import React from "react";
import '../styles/main.css';

export const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"/>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customCheck"/>
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                                        Me
                                                    </label>
                                                </div>
                                            </div>
                                            <a href="dashboard" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </a>
                                            <hr/>
                                            <div className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"/> Login with Google
                                            </div>
                                            <div className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"/> Login with Facebook
                                            </div>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};