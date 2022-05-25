import React from "react";
import ReturnComponent from "./ReturnComponent";
import '../styles/Glasses.css';
const GlassesComponent = function () {
    
    function onclick() {
        window.location.assign('http://localhost:3000/frame-size');
    }
    return(
        <div className="glasses-page">
            <button onClick={() => onclick()}>{'<'}</button>
            <ReturnComponent/>
            <h1 className="glasses-h1">What type of glasses are you looking for?</h1>
            <button className="glasses-btn1" onClick={() => onclick()}>
                Eyeglasses
            </button> <br />
            <button className="glasses-btn2" onClick={() => onclick()}>Sunglasses</button>
        </div>
    );
}
export default GlassesComponent;