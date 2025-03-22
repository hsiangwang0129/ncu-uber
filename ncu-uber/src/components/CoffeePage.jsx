import React from "react";
import Navbar from "./Navbar";
import CoffeeMapWrapper from "./CoffeeMapWrapper";
import "./CoffeePage.css";

const CoffeePage = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <form className = "coffee-page">
        <input placeholder="請輸入地圖名稱"></input>
        <button>搜尋</button>
      </form> */}

      <CoffeeMapWrapper></CoffeeMapWrapper>
    </>
  );
};

export default CoffeePage;
