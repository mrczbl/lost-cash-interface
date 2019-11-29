import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {toast} from "react-toastify";
import {validate} from './validation';
import {useDispatch, useSelector} from 'react-redux'
import {setUserLogin, setUserRegister} from "../global/actions";
import {registerUser} from "../helper/ApiRequest";
import {Toast} from "../components/Wrapper/Toast";
import '../styles/main.css';

// Hook noch nicht ausgelagert

const useForm = (validate: any) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log('useEffect active');
    }
  }, [errors]);

  async function handleSubmit(event: any) {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  async function handleChange(event: any) {
    event.persist();
    setValues(values => ({ ...values, [event.target.id]: event.target.value }));
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export const Register = () => {
//   let [email, setEmail] = useState("");
//   let [password1, setPassword1] = useState("");
//   let [password2, setPassword2] = useState("");
//   let [name, setName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//
//   const dispatch = useDispatch();
//
//   useEffect(() => {
//     console.log('useEffect has been called!');
//     if (isSubmitting) {
//       console.log('useEffect active');
//     }
// }, [password1, password2]);
//
//   async function handleSubmit(event: any) {
//     event.preventDefault();
//     setIsSubmitting(true);
//     toast.dismiss();
//
//     try {
//       let register: any = await registerUser({name, email, password1, password2}); //this
//
//         if(!register.error) {
//           dispatch(setUserRegister(register.user.name, register.user.email, register.user.password1, register.user.password2));
//           toast.success('success');
//         } else {
//           toast.error('nooo');
//         }
//       } catch (error) {
//         toast.error("catch nooo");
//       }
//
//       console.log(name, email, password1, password2);

const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(validate);



  // async function handleInputChange(event: any) {
  //   event.persist();
  //
  //   setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  // }


    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image"/>
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form className="user" onSubmit={handleSubmit}>
                                <button type="button" onClick={handleSubmit}>
                                Click meh
                                </button>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user"
                                               id="exampleFullName" placeholder="Full Name"
                                               onChange={handleChange}
                                               value={values.name || ''}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user"
                                               id="exampleInputEmail" placeholder="Email Address"
                                               onChange={handleChange}
                                               value={values.email || ''}/>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                   id="exampleInputPassword" placeholder="Password"
                                                   onChange={handleChange}
                                                   value={values.password1 || ''}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                   id="exampleRepeatPassword" placeholder="Repeat Password"
                                                   onChange={handleChange}
                                                   value={values.password2 || ''}/>
                                        </div>
                                    </div>
                                    <a href="\\localhost:3000/login" className="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>
                                    <hr/>
                                    <a className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"/> Register with Google
                                    </a>
                                    <a className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"/> Register with Facebook
                                    </a>
                                </form>
                                <hr/>
                                <div className="text-center">
                                    <a className="small" href="\\localhost:3000/forgot-password">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="\\localhost:3000/login">Already have an account? Login!</a>
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
