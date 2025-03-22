import React from "react";
import "./CoffeeMapGroup.css";
import { LuExternalLink } from "react-icons/lu";
import { TbStarFilled } from "react-icons/tb";

const CoffeeMapGroup = ({ coffeeGroups }) => {
  return (
    <>
      <div className="coffee-group">
        <div className="flex">
          <h2>{coffeeGroups.title}</h2>
          <a href={coffeeGroups.href} target="_blank" rel="noopener noreferrer">
            <h1 className="linkbutton">
              <LuExternalLink />
            </h1>
          </a>
        </div>
        <div className="flex">
          <h2>
            {coffeeGroups.star} 
            {Array(Math.floor(coffeeGroups.star)) 
              .fill(0)
              .map((_, i) => (
                <TbStarFilled key={i} />
              ))}
            {coffeeGroups.star % 1 >= 0.5 && <TbStarFilled style={{ opacity: 0.5 }} />}{" "}
            
          </h2>
          <img src={coffeeGroups.image}></img>
        </div>
      </div>
    </>
  );
};

export default CoffeeMapGroup;
