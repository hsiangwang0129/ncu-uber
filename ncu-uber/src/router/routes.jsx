import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../components/HomePage';
import LoginSignup from '../components/LoginSignup'
import Login from '../components/login';
import Signup from '../components/Signup';


// 定義路由陣列
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loginsignup",
    element: <LoginSignup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
//   {
//     path: "*", // 萬用路徑（找不到時顯示的頁面）
//     element: <NotFoundPage />,
//   },
];

// 建立 router，並啟用未來標誌 (future flags)
const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true, // 提早啟用 React 的 startTransition
  },
});

export default router;
