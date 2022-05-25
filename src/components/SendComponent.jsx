import React from "react";
import ReturnComponent from "./ReturnComponent";
import '../styles/Send.css';
const SendComponent = function () {

    function onclick() {
        window.location.assign("http://localhost:3000/");
    }

    return(
        <div className="send-page">
            <button onClick={() => onclick()}>{'<'}</button>
            <ReturnComponent />
            <h1 className="send-h1">We've found some awesome frames for you</h1>
            <h2 className="send-h2">Send the result to your email to receive special discounts</h2>
            <button className="send-btn" onClick={() => onclick()}>Send</button>
            <h5 className="send-h5">By clicking "Send" you agree to our Teams of Use and Privacy Policy and receiving promotion emails</h5>
        </div>
    );
}
export default SendComponent;