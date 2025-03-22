import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Signup.css";
import { useEffect, useState } from "react";
const Signup = () => {
  const location = useLocation();
  const email = location.state?.email || "";
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [comfirmPwd,setCofirmPwd] = useState("");
  const apiurl = import.meta.env.VITE_BACKEND_URL;
  
  useEffect(() => {
    if (!email) {
      navigate("/LoginSignup");
    }
  }, [email, navigate]);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if (password!==comfirmPwd) {
      alert("確認密碼需與設定密碼相同");
      return; 
    }
    
    try {

      const res = await fetch(`http://${apiurl}/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name,email,password})
      });
      
      const data = await res.json();

      if (res.ok) {
        console.log("Success add user! ", data.message);
        navigate("/");
      } else {
        console.log("Failed to add user:", data.error);
        navigate("/signup", { state: { email } }); // 跳轉到註冊頁面，並傳遞 email
      }
      

    } catch (error) {
      console.error("Failed to add user:", error);
    }

  }


  return (
    <>
      <Navbar ></Navbar>
      <form onSubmit = {handleSubmit}>
        <div className="signup-container">
          <div className="signup-wrapper">
            <h2>請設定密碼</h2>
            <h2 className="email-text">{email}</h2>
            <input 
                  placeholder="請輸入您的名字" 
                  value = {name} 
                  onChange={(e) => {
                    setName(e.target.value)
                    console.log(e.target.value)
                  }}
                  ></input>
            <input 
                  placeholder="請輸入您的密碼" 
                  value = {password} 
                  onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value)
                  }}
                  ></input>
            <input 
                  placeholder="重複輸入密碼"
                  value = {comfirmPwd}
                  onChange={(e) => {
                    setCofirmPwd(e.target.value)
                    console.log(e.target.value)
                  }}
            
            ></input>
            <button>註冊帳號</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
