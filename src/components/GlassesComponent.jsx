import React from "react";
import ReturnComponent from "./ReturnComponent";
import BackComponent from "./BackComponent";
import '../styles/Glasses.css';
const GlassesComponent = function () {
    
    function onclick() {
        window.location.assign('http://localhost:3000/frame-size');
    }

    function ofclick() {
        window.location.assign('http://localhost:3000/gender')
    }
    return(
        <div className="glasses-page">
            <button onClick={() => ofclick()}><BackComponent /></button>
            <ReturnComponent/>
            <h1 className="glasses-h1">What type of glasses are you looking for?</h1>
            <button className="glasses-btn1" onClick={() => onclick()}>
                <div className="eye-logo"></div>
                Eyeglasses
            </button> <br />
            <button className="glasses-btn2" onClick={() => onclick()}>
                <div className="sun-logo"></div>
                Sunglasses
            </button>
        </div>
    );
}
export default GlassesComponent;