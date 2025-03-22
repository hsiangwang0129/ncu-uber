import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [password,setPassword] = useState("");
  const apiurl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    if (!email) {
      // 如果 email 不存在，重定向到 /loginsignup
      navigate("/LoginSignup");
    }
  }, [email, navigate]);



  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://${apiurl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email,password}) // 將資料轉換成 JSON 格式
      });

      const data = await res.json();

      if (res.ok) {
        console.log("password Correct!:", data);
        const name = data.name;
        login({id:data.id,name:data.name});
        console.log("id:",data.id)
        console.log("name:",name); 
        navigate("/");
      } else {
        console.log("Password not found:", data.error);
        // navigate("/signup", { state: { email } }); // 跳轉到註冊頁面，並傳遞 email
      }
      
      
    } catch (error) {
      console.error("Failed to check email:", error);
    }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handelSubmit}>
      <div className="loginsignup-container">
        <div className="loginsignup-wrapper">
          
            <h2>請輸入您的密碼</h2>
            <input 
              type = "text" 
              placeholder="請輸入您的密碼" 
              value = {password} 
              onChange={(e) => {
              setPassword(e.target.value)
              console.log(e.target.value)
            }}></input>
            <button>登入</button>
          
        </div>
      </div>
      </form>
    </>
  );
};

export default Login;
