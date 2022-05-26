import React from "react";
import ReturnComponent from "./ReturnComponent";
import BackComponent from "./BackComponent";
import '../styles/Gender.css';
 const GenderComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/glasses');
    }

    function ofclick() {
        window.location.assign('http://localhost:3000/');
    }

    return(
        <div className="gender-page">
            <button onClick={() => ofclick()}><BackComponent /></button>
            <ReturnComponent/>
            <h1 className="gender-h1">You are looking for</h1>
            <button className="gender-btn1" onClick={() => onclick()}>
                <div className="woman-logo"></div>
                Woman's Styles
            </button> <br />
            <button className="gender-btn2" onClick={() => onclick()}>
                <div className="man-logo"></div>
                Man's Styles
            </button>
        </div>
    );
 }
 export default GenderComponent;