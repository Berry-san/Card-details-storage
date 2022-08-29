import React from "react";
import "./Confirmation.css";

function Confirmation() {
  const button = document.querySelector("button");
  button.onclick = () => {
    window.location.reload();
  };
  return (
    <div className="confirm">
      <img src="/images/icon-complete.svg" alt="" />
      <h1>THANK YOU !</h1>
      <p>We've added your card details</p>
      <div>
        <button type="button" className="new-button">
          Continue
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
