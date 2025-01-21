"use client"
import { useState } from "react";
import SingleSlider from "./SingleSlider"
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { useDispatch } from "react-redux";
import { addStock } from "@/store/StockSlice";

const SliderCollection = (props) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([
    { id: "1", type: "pe", summary: "t shows how much investors are willing to pay for each unit of a company's profit.", "value": 33, "priority": 1 },
    { id: "2", type: "debt/equity ratio", summary: "It shows how much debt a company has compared to its own money (equity)", "value": 33, "priority": 2 },
    { id: "3", type: "dividend yield", summary: "It shows how much money you earn (as a percentage) in dividends for every ₹100 you invest in the stock", "value": 33, "priority": 3 },
    { id: "4", type: "peg_ratio", summary: "It combines the PE ratio with the company’s growth rate to check if a stock is fairly priced.", "value": 33, "priority": 4 },
    { id: "5", type: "roe", summary: "It shows how much profit a company makes for every ₹1 of its own money (equity).", "value": 33, "priority": 5 },
    { id: "6", type: "roce", summary: "It shows how much profit a company makes for every ₹1 of total money (capital) it uses, including both debt and equity.", "value": 33, "priority": 6 },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      setItems((prev) => {
        const updatedItems = arrayMove(prev, oldIndex, newIndex);
        const prioritizedItems = updatedItems.map((item, index) => ({
          ...item,
          priority: index + 1,
        }));

        dispatch(addStock(prioritizedItems));

        return prioritizedItems;
      });
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-3 gap-4 p-4 animate-wave hover:animate-none ">
          {items.map((item, index) => (
            <SortableItem key={item.id} id={item.id} animationClass={getAnimationClass(index)} >
              <SingleSlider type={item.type} summary={item.summary} id={item.id} />
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
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

const SortableItem = ({ id, children, animationClass }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const dynamicStyles = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={dynamicStyles}
      {...attributes}
      {...listeners}
      className={`text-center ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default SliderCollection;
