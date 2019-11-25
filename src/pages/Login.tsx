import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {toast} from "react-toastify";
import {loginUser} from "../helper/ApiRequest";
import {useDispatch, useSelector} from 'react-redux'
import {setUserLogin} from "../global/actions";
import {Toast} from "../components/Wrapper/Toast";
import '../styles/main.css';

export const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [rememberMe, setRememberMe] = useState(false);
    let [loading, setLoading] = useState(false);
    const loginStatus = useSelector((state: any) => (state.user.loggedIn));

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => { if(loginStatus) { history.push('/'); } }, [loginStatus]);

    async function handleSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
        toast.dismiss();

        try {
            let login: any = await loginUser({email, password});
            if (!login.error) {
                dispatch(setUserLogin(login.user.name, login.user.email));
                history.push('/');
                return;
            } else {
                toast.error('This combination was wrong :(');
            }
        } catch (error) {
            toast.error("This combination was wrong :(");
            setLoading(false);
        }
    }

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
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Your E-Mail Address"/>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={(event) => setPassword(event.target.value)}
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck"
                                                        checked={rememberMe}
                                                        onChange={(e) => setRememberMe(e.target.checked)}
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <button disabled={loading} type="submit"
                                                    className="btn btn-primary btn-user btn-block">
                                                {!loading ? 'Login' : 'Loading'}
                                            </button>
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
            <Toast />
        </div>
    );
};