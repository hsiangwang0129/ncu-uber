import React from "react";
import GroupProvider from "../context/GroupProvider";
import GroupWrapper from "./GroupWrapper";
import Navbar from "./Navbar";
import SearchWrapper from "./SearchWrapper";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

const HomePage = () => {
  const { auth } = useContext(AuthContext); // 獲取 auth 狀態

  useEffect(() => {
    console.log("Current auth state:", auth); // 在進入 HomePage 或刷新時打印
  }, [auth]); // 每次 auth 更新時觸發

  return (
    <>
      <Navbar></Navbar>
      <SearchWrapper></SearchWrapper>
      <GroupWrapper></GroupWrapper>
    </>
  );
};

export default HomePage;
