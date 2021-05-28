import React from "react";
import {Link} from "react-router-dom";

import "./logo.css";

import logo from "./logo.png";

const Logo = () => {
    return(
      <div className="logo-container">
          <Link to="/home">
              <img src={logo} alt="logo"/>
          </Link>
      </div>
    );
};

export default Logo;