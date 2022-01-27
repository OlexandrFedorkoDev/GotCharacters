import React from 'react';
import img from './error.jpeg'
import './errorMesage.css'

const ErrorMesage = () => {
    return (
        <>
            <img src={img}></img>
            <span>Something goes wrong </span>
        </>


    )
}

export default ErrorMesage;