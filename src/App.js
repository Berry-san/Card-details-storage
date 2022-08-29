import "./App.css";
import "./index.css";
import CardInput from "./components/CardInput";

function App() {
  return (
    <div class="wrapper">
      <div class="image">
        <img src="/images/bg-main-desktop.png" alt="" />
      </div>
      <div class="form">
        <div>
          <CardInput className="card-input" />
        </div>
      </div>
      <div>
        <img src="/images/bg-card-front.png" alt="" className="card-front" />
      </div>
      <div>
        <img src="/images/bg-card-back.png" alt="" className="card-back" />
      </div>
      <div>
        <img src="/images/bank.png" alt="" className="bank" />
      </div>
      <div>
        <img src="/images/bg-main-mobile.png" alt="" className="mobile" />
      </div>

      <p className="card-number">0000 0000 0000 0000</p>
      <p className="card-name">Sheldon Cooper</p>
      <p className="card-exp">
        <span className="card-month">00</span>/
        <span className="card-year">00</span>
      </p>
      <p className="card-cvc">000</p>
      <div></div>
    </div>
  );
}

export default App;
