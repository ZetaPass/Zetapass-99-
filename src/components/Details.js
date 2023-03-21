import React from "react";
import Navbar from "./Navbar";
import "./css/Details.css";
import Strokebtn from "./Strokebtn";

export default function Details() {
  return (
    <div className="details">
        <Navbar />
      <div className="details-front">
        <div className="poster">
          <img alt="poster" src={require("./Images/card.jpg")} />
        </div>
      </div>
      <div className="name-sch">
        <div className="event-name">
          <h1>Intro to web3</h1>
          <p className="location">Event venue location</p>
          <Strokebtn title="Register" fill="fill btn"/>
        </div>
        <div className="schedule">
          <div>
            <p>Thu, 12 Jan</p>
            <div className="timing">
              <h1 className="time">12:00 PM</h1>
              <h1>to</h1>
              <h1 className="time">02:00 PM</h1>
            </div>
            <p>GMT + 5:30 Kolkata</p>
          </div>
        </div>
      </div>
    </div>
  );
}
