import React from "react";

export const OrderMenu = (props) => {       //the component that will be mapped
  const { id, foodName, Price, foodImage, description } = props.data;        //creating data for the props

  return (
    <div className="order-menu">
        <div className="order-menu-words">
            <h3>{foodName}</h3>
            <p>{description}</p>
            <h4>${Price}</h4>
        </div>
        <div className="order-menu-image">
            <img src={foodImage} alt="little-lemon-food-images"/>
        </div>
      
    </div>
  );
};