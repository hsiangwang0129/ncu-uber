import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  //const [loading, setLoading] = useState(false);

  const login = (userData) => {
    setAuth(userData);
    localStorage.setItem("auth", JSON.stringify(userData)); // 保存到 localStorage
    console.log("auth after setAuth:", auth);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth"); // 清除 localStorage
  };

  useEffect(() => {
    console.log("AuthProvider useEffect called!");
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      console.log("Stored auth found:", storedAuth);
      setAuth(JSON.parse(storedAuth)); // 恢復 auth 狀態
    } else {
      console.log("No stored auth found.");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
