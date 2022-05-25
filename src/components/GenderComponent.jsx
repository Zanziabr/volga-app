import React from "react";
import ReturnComponent from "./ReturnComponent";
import '../styles/Gender.css';
 const GenderComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/glasses');
    }

    return(
        <div className="gender-page">
            <button onClick={() => onclick()}>{'<'}</button>
            <ReturnComponent/>
            <h1 className="gender-h1">You are looking for</h1>
            <button className="gender-btn1" onClick={() => onclick()}>Woman's Styles</button> <br />
            <button className="gender-btn2" onClick={() => onclick()}>Man's Styles</button>
        </div>
    );
 }
 export default GenderComponent;