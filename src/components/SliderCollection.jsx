"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "@/store/StockSlice";
import { useDrag, useDrop } from "react-dnd";
import SingleSlider from "./SingleSlider";

// Define the item type
const ItemType = "ITEM";

const SliderCollection = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([
    { id: "1", type: "pe", summary: "It shows how much investors are willing to pay for each unit of a company's profit.", value: 33, priority: 1, field: "current_pe", radio: "higher" },
    { id: "2", type: "debt/equity ratio", summary: "It shows how much debt a company has compared to its own money (equity)", value: 33, priority: 2, field: "debt_equity_ratio", radio: "higher" },
    { id: "3", type: "dividend yield", summary: "It shows how much money you earn (as a percentage) in dividends for every ₹100 you invest in the stock", value: 33, priority: 3, field: "div_yield", radio: "higher" },
    { id: "4", type: "peg_ratio", summary: "It combines the PE ratio with the company’s growth rate to check if a stock is fairly priced.", value: 33, priority: 4, field: "peg_ratio", radio: "higher" },
    { id: "5", type: "roe", summary: "It shows how much profit a company makes for every ₹1 of its own money (equity).", value: 33, priority: 5, field: "roe", radio: "higher" },
    { id: "6", type: "roce", summary: "It shows how much profit a company makes for every ₹1 of total money (capital) it uses, including both debt and equity.", value: 33, priority: 6, field: "roce", radio: "higher" }
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    const prioritizedItems = updatedItems.map((item, index) => ({
      ...item,
      priority: index + 1,
    }));
    setItems(prioritizedItems);
    dispatch(addStock(prioritizedItems)); // Sync with Redux store
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 animate-wave hover:animate-none">
    {items.map((item, index) => (
      <DraggableItem
        key={item.id}
        index={index}
        item={item}
        moveItem={moveItem}
        animationClass={getAnimationClass(index)}
      />
    ))}
  </div>
  
  
  );
};

const getAnimationClass = (index) => {
  // Define the animation based on the item's index
  switch (index) {
    case 0:
    case 1:
      return "animate-slideInTop"; // Boxes from the top
    case 2:
    case 3:
      return "animate-slideInBottom"; // Boxes from the bottom
    case 4:
      return "animate-slideInRight"; // Box from the right
    case 5:
      return "animate-slideInLeft"; // Box from the left
    default:
      return "";
  }
};

const DraggableItem = ({ item, index, moveItem, animationClass }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  const dynamicStyles = {
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={dynamicStyles}
      className={`text-center ${animationClass}`}
    >
      <div
      >
        <SingleSlider
          type={item.type}
          summary={item.summary}
          id={item.id}
        />
      </div>
    </div>
  );
};

export default SliderCollection;
