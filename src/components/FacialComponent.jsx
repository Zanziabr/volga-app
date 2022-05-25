import React from "react";
import ReturnComponent from "./ReturnComponent";
import '../styles/Facial.css';
 const FacialComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/frame-style');
    }

    return(
        <div className="facial-page">
            <button onClick={() => onclick()}>{'<'}</button>
            <ReturnComponent/>
            <h1 className="facial-h1">How would you define your facial features?</h1>
            <button className="facial-btn1" onClick={() => onclick()}>Sharp</button> <br />
            <button className="facial-btn2" onClick={() => onclick()}>Rounded</button> <br />
            <button className="facial-btn3" onClick={() => onclick()}>In between</button>
        </div>
    );
 }
 export default FacialComponent;