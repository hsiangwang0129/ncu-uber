import React from "react";
import "./Navbar.css";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>NCUber</h1>
        </Link>
      </div>

      <div className="selectList">
        <a>
          <button>聊天室</button>
        </a>
        <a>
          <button>簡介</button>
        </a>
      </div>

      <div className="buttonPart">
        <Link to="/LoginSignup">
          <button className="login">登入</button>
        </Link>
        <Link to="/LoginSignup">
          <button className="register">註冊</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
