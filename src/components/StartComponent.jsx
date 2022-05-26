import React from "react";
import '../styles/Start.css';
const StartComponent = function () {
    
    function onclick() {
        window.location.assign('http://localhost:3000/gender');
    }
    return(
        <div className="start-page">
            <div className="optimax-logo"></div>
            <div className="start-logo"></div>
            <h1 className="start-h1">Let's find your perfect pair!</h1>
            <h3 className="start-h3">Take the quiz to easily discover your prefect fit from thousands of styles</h3>
            <button className="start-btn" onClick={() => onclick()}>Start now</button>
        </div>
    );
}
export default StartComponent;