import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const login = (userData) => {
    setAuth(userData);
    localStorage.setItem("auth", JSON.stringify(userData)); // 保存到 localStorage
    console.log("auth after setAuth:",auth);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth"); // 清除 localStorage
  };


  

//   加了以下會完全render不出畫面ㄇㄇ
//   useEffect(() => {
//     // 可選：在應用啟動時檢查服務器是否驗證用戶有效性
//   }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
