import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "./Images/logo.png";
import Strokebtn from "./Strokebtn";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" className="ourlogo" />
        </Link>
      </div>
      <div className="nav-item">
        <div className="navdata">
          <Link to="/event">
          <Strokebtn title="Events" href='/event' fill="btn"/>
          </Link>
        </div>
        <div className="navdata">
          <Link to="/event">
          <Strokebtn title="Education" href='/event' fill="btn"/>
          </Link>
        </div>
        <div className="navdata">
          <Link to="/">
          <Strokebtn title="Resourse" fill="btn"/>
          </Link>
        </div>
        <div className="navdata">
          <Link to="/">
          <Strokebtn title="Connect wallet" fill="fill btn"/>
          </Link>
        </div>

        <div className = "event create">
          <Link to = "/createEvent">
            <Strokebtn title="Create event" href = '/createEvent' fill="fill btn"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
