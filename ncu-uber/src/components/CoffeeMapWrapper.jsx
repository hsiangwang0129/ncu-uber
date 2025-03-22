import React, { useState } from "react";
import { useContext } from "react";
import CoffeeMapGroup from "./CoffeeMapGroup";
import "./CoffeeMapWrapper.css";
import { CoffeeGroupContext } from "../context/CoffeeMapProvider";
import Navbar from "./Navbar";
function CoffeeMap() {
  const { coffeeGroups, searchGroup } = useContext(CoffeeGroupContext);
  const [ keyword, setKeyword ] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    searchGroup(keyword);
    setKeyword("");
  }
  return (
    <>
      <form className="coffee-page" onSubmit = {handleSubmit}>
        <input 
          placeholder="請輸入地圖名稱"
          onChange={(e) => {
            setKeyword(e.target.value)
            console.log(e.target.value)
          }}
        ></input>
        <button>搜尋</button>
      </form>
      <div className="coffee-wrapper">
        {coffeeGroups.map((coffeeGroups, index) => {
          return (
            <CoffeeMapGroup
              key={index}
              coffeeGroups={coffeeGroups}
              searchGroup={searchGroup}
            />
          );
        })}
      </div>
    </>
  );
}

export default CoffeeMap;
