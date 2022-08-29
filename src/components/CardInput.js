import React, { useState } from "react";
// import Button from "./Button";
import Confirmation from "./Confirmation";
import "./CardInput.css";

function CardInput(props) {
  const [isShown, setIsShown] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredMonth, setEnteredMonth] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredCVC, setEnteredCVC] = useState("");

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }
  function numberChangeHandler(event) {
    setEnteredNumber(event.target.value);
  }
  function monthChangeHandler(event) {
    setEnteredMonth(event.target.value);
  }
  function yearChangeHandler(event) {
    setEnteredYear(event.target.value);
  }
  function CVCChangeHandler(event) {
    setEnteredCVC(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const cardDetails = {
      name: enteredName,
      number: enteredNumber,
      month: enteredMonth,
      year: enteredYear,
      CVC: enteredCVC,
    };
    console.log(cardDetails);

    setEnteredName("");
    setEnteredNumber("");
    setEnteredMonth("");
    setEnteredYear("");
    setEnteredCVC("");

    const updateName = document.querySelector(".card-name");
    updateName.textContent = enteredName;
    const updateNumber = document.querySelector(".card-number");
    updateNumber.innerHTML = enteredNumber;
    const updateMonth = document.querySelector(".card-month");
    updateMonth.innerHTML = enteredMonth;
    const updateYear = document.querySelector(".card-year");
    updateYear.innerHTML = enteredYear;
    const updateCVC = document.querySelector(".card-cvc");
    updateCVC.innerHTML = enteredCVC;

    // const showConfirmHandler = () => {
    //   setIsShown(true);
    // };

    // const hideConfirmHandler = () => {
    //   setIsShown(false);
    // };
    setIsShown((current) => !current);
  }

  return (
    <div>
      {!isShown && (
        <div>
          <div className="formInput">
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label htmlFor="">CARDHOLDER NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Sheldon Cooper"
                  onChange={nameChangeHandler}
                  value={enteredName}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="">CARD NUMBER</label>
                <input
                  type="tel"
                  placeholder="e.g. 1234 5678 9000 0000"
                  onChange={numberChangeHandler}
                  value={enteredNumber}
                  maxLength={16}
                  //   pattern="0-9"
                  //   required
                />
              </div>

              <div className="Exp-Date">
                <div>
                  <label htmlFor="">EXP. DATE (MM/YY) </label>
                  <div>
                    <input
                      type="text"
                      placeholder="MM"
                      maxLength={2}
                      onChange={monthChangeHandler}
                      value={enteredMonth}
                      required
                    />
                    <input
                      type="text"
                      placeholder="YY"
                      maxLength={2}
                      onChange={yearChangeHandler}
                      value={enteredYear}
                      required
                    />
                  </div>
                </div>
                <div className="CVC">
                  <label htmlFor="">CVC</label>
                  <input
                    type="text"
                    placeholder="e.g. 123"
                    onChange={CVCChangeHandler}
                    value={enteredCVC}
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isShown && (
        <div>
          <Confirmation />
        </div>
      )}
    </div>
  );
}

export default CardInput;
