import React, { useState } from "react";
import Navbar from "./Navbar";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";


const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const apiurl = import.meta.env.VITE_BACKEND_URL;
  
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const checkuser = { email };
    try {
      const res = await fetch(`http://${apiurl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(checkuser) // 將資料轉換成 JSON 格式
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Email exists:", data.message);
        navigate("/login", { state: { email } });
      } else {
        console.log("Email not found:", data.error);
        navigate("/signup", { state: { email } }); 
      }
      
      
    } catch (error) {
      console.error("Failed to check email:", error);
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit}>
        <div className="loginsignup-container">
          <div className="loginsignup-wrapper">
            <h2>請輸入您的電子郵件地址</h2>
            <input
              type="text"
              placeholder="請輸入您的電子郵件地址"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("email is : ", e.target.value);
              }}
            />
            <button>註冊或登入</button>
          </div>
        </div>
      </form>

      
      
    </div>
  );
};

export default LoginSignup;
