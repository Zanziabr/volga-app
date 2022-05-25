import React, { useState } from "react";
import ReturnComponent from "./ReturnComponent";
import '../styles/Brands.css';
const BrandsComponent = function () {

    const [clicked1, setClicked1] = useState(false);

    const [clicked2, setClicked2] = useState(false);

    const [clicked3, setClicked3] = useState(false);

    const [clicked4, setClicked4] = useState(false);

    function handleClick1() {
        setClicked1(!clicked1);
    }

    function handleClick2() {
        setClicked2(!clicked2);
    }

    function handleClick3() {
        setClicked3(!clicked3);
    }

    function handleClick4() {
        setClicked4(!clicked4);
    }

    function onclick() {
        window.location.assign("http://localhost:3000/send");
    }

    function ofclick() {
        window.location.assign('http://localhost:3000/frame-style');
    }

    return(
        <div className="brands-page">
            <button onClick={() => ofclick()}>{'<'}</button>
            <ReturnComponent/>
            <h1 className="brands-h1">Choose your favorite brands</h1>
            <h2 className="brands-h2">You can pick more than one.</h2>
            <div>
                <button className="brands-btn1" onClick={handleClick1} style={{border: clicked1 ? "2px solid blue" : ""}}>RayBan</button>
                <button className="brands-btn2" onClick={handleClick2} style={{border: clicked2 ? "2px solid blue" : ""}}>Darkley</button> <br />
                <button className="brands-btn3" onClick={handleClick3} style={{border: clicked3 ? "2px solid blue" : ""}}>Hilary Duff</button>
                <button className="brands-btn4" onClick={handleClick4} style={{border: clicked4 ? "2px solid blue" : ""}}>PRADA</button>
            </div>
            <button className="brands-c" onClick={() => onclick()}>Continue</button>
        </div>
    );
}
export default BrandsComponent;