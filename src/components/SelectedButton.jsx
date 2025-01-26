"use client";
import { updateVisibleValue } from "@/store/StockSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SelectedButton = (props) => {
  const dispatch = useDispatch();

  // Set initial state to false (not clicked)
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    // Toggle the clicked state and update visibility
    dispatch(updateVisibleValue([props.type, !isClicked]));
    console.log(props.type)
    console.log(!isClicked)
    setIsClicked((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-3 h-3 rounded-full border-2 border-black transition-all duration-200 ease-in-out ${
        isClicked ? "bg-black ring-4 ring-white" : "bg-white"
      }`}
    ></button>
  );
};

export default SelectedButton;
