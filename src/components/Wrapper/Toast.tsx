import React from 'react';
import {ToastContainer} from "react-toastify";

export const Toast = () => {
    return <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
    />
};