import React from "react";
import ReturnComponent from "./ReturnComponent";
import BackComponent from "./BackComponent";
import '../styles/Faces.css';
 const FacesComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/facial-features');
    }

    function ofclick() {
        window.location.assign('http://localhost:3000/shades');
    }
    return(
        <div className="faces-page">
            <button onClick={() => ofclick()}><BackComponent /></button>
            <ReturnComponent/>
            <h1 className="faces-h1">Every face shape has a perfect fit. What's yours?</h1>
            <button className="faces-btn1" onClick={() => onclick()}>I have a long face</button> <br/>
            <button className="faces-btn2" onClick={() => onclick()}>I have a round face</button> <br/>
            <button className="faces-btn3" onClick={() => onclick()}>In between</button>
        </div>
    );
 }
 export default FacesComponent;