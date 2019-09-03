import React from "react";
import "./App.css";
import MasterCard from "./MasterCard.png";
import puce from "./puce.png";
import visa from "./visa.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Credit card</h2>
        <img src={puce} className="puce" alt="puce" height="50px" />
        <div className="allInfos">
          <div className=" block">
            <h3>2151-1511-8841-4414</h3>
            <div className="infos">
              <h4>5422 </h4>
              <h4 className="date">11/50</h4>
            </div>
            <h4>CARDHOLDER</h4>
          </div>
          <div className="PaymentCompanies block">
            <img
              src={MasterCard}
              className="MasterCard"
              alt="MasterCard"
              height="50px"
            />
            <img src={visa} className="visa" alt="visa" height="50px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
