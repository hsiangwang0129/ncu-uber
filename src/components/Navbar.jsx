import React from "react";
import "./Navbar.css";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext); // 獲取 auth 和 logout 方法
  const isLoggedIn = auth && Object.keys(auth).length > 0;
  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

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
        {isLoggedIn ? (
          <>
            <div className="userIcon">
              <FaUserCircle size={70} />
            </div>
            <button className="logout" onClick={handleLogout}>
              登出
            </button>
          </>
        ) : (
          <>
            <Link to="/LoginSignup">
              <button className="login">登入</button>
            </Link>
            <Link to="/LoginSignup">
              <button className="register">註冊</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
