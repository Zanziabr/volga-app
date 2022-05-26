import React from "react";
import ReturnComponent from "./ReturnComponent";
import BackComponent from "./BackComponent";
import '../styles/FrameSize.css';
 const FrameSizeComponent = function () {

    function onclick() {
        window.location.assign('http://localhost:3000/shades');
    }

    function ofclick() {
        window.location.assign('http://localhost:3000/glasses');
    }

    return(
        <div class="framesize-page">
            <button onClick={() => ofclick()}><BackComponent /></button>
            <ReturnComponent/>
            <h1 className="framesize-h1">What's your current frame-size</h1>
            <div className="framesize-logo"></div>
            <button className="framesize-btn1" onClick={() => onclick()}>Small 42-48mm</button> < br/>
            <button className="framesize-btn2" onClick={() => onclick()}>Medium 49-53mm</button> <br/>
            <button className="framesize-btn3" onClick={() => onclick()}>Large 54-58mm</button>
        </div>
    );
 }
 export default FrameSizeComponent;