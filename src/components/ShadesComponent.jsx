import React from "react";
import ReturnComponent from "./ReturnComponent";
import '../styles/Shades.css';
 const ShadesComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/faces');
    }

    return(
        <div className="shades-page">
            <button onClick={() => onclick()}>{'<'}</button>
            <ReturnComponent/>
            <h1 className="shades-h1">Which shade of lenses do you prefer?</h1>
            <button className="shades-btn1" onClick={() => onclick()}>Dark Shade</button>
            <button className="shades-btn2" onClick={() => onclick()}>Light Shade</button>
            <button className="shades-btn3" onClick={() => onclick()}>Transitioning Shade</button>
        </div>
    );
 }
 export default ShadesComponent;