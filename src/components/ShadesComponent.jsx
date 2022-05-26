import React from "react";
import ReturnComponent from "./ReturnComponent";
import BackComponent from "./BackComponent";
import '../styles/Shades.css';
 const ShadesComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/faces');
    }

    function ofclick() {
        window.location.assign("http://localhost:3000/frame-size");
    }
    return(
        <div className="shades-page">
            <button onClick={() => ofclick()}><BackComponent /></button>
            <ReturnComponent/>
            <h1 className="shades-h1">Which shade of lenses do you prefer?</h1>
            <button className="shades-btn1" onClick={() => onclick()}>
                <div className="dark-logo"></div>
                Dark Shade
            </button>
            <button className="shades-btn2" onClick={() => onclick()}>
                <div className="light-logo"></div>
                Light Shade
            </button>
            <button className="shades-btn3" onClick={() => onclick()}>
                <div className="transit-logo"></div>
                Transitioning Shade
            </button>
        </div>
    );
 }
 export default ShadesComponent;