import React from "react";
import '../styles/Return.css';
const ReturnComponent = function () {

    function ret() {
        window.location.assign("http://localhost:3000/");
    }
    return(
        <div className="return-page">
            <button className="return-btn" onClick={() => ret()}>X</button>
        </div>
    );
}
export default ReturnComponent;