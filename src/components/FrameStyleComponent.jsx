import React, { useState } from "react";
import ReturnComponent from "./ReturnComponent";
import BackComponent from "./BackComponent";
import '../styles/FrameStyle.css';
const FrameStyleComponent = function () {

    const [btn1, setBtn1] = useState(false);

    const [btn2, setBtn2] = useState(false);

    const [btn3, setBtn3] = useState(false);

    const [btn4, setBtn4] = useState(false);

    function buttonClick1() {
        setBtn1(!btn1);
    }

    function buttonClick2() {
        setBtn2(!btn2);
    }

    function buttonClick3() {
        setBtn3(!btn3);
    }

    function buttonClick4() {
        setBtn4(!btn4);
    }
    
    function onclick() {
        window.location.assign("http://localhost:3000/brands");
    }
    function ofclick() {
        window.location.assign('http://localhost:3000/facial-features');
    }
    return(
        <div className="framestyle-page">
            <button onClick={() => ofclick()}><BackComponent /></button>
            <ReturnComponent/>
            <h1 className="framestyle-h1">Which frame style are you looking for?</h1>
            <h2 className="framestyle-h2">You can pick more than one.</h2>
            <div className="framestyle-scrollbar">
                <button className="framestyle-btn1" onClick={buttonClick1} style={{border: btn1 ? "2px solid blue" : ""}}>
                    <div className="rectangle-logo"></div>
                    Rectange
                </button>
                <button className="framestyle-btn2" onClick={buttonClick2} style={{border: btn2 ? "2px solid blue" : ""}}>
                    <div className="browline-logo"></div>
                    Browline
                </button>
                <button className="framestyle-btn3" onClick={buttonClick3} style={{border: btn3 ? "2px solid blue" : ""}}>
                    <div className="wayframe-logo"></div>
                    Wayframe
                </button>
                <button className="framestyle-btn4" onClick={buttonClick4} style={{border: btn4 ? "2px solid blue" : ""}}>
                    <div className="round-logo"></div>
                    Round
                </button>
            </div>
            <button className="framestyle-c" onClick={() => onclick()}>Continue</button>
        </div>
    );
}
export default FrameStyleComponent;