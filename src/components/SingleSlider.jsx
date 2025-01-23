"use client"
import { Slider } from "@/components/ui/slider"
import {  useEffect, useState } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useDispatch } from "react-redux"
import { updateRadioValue, updateStockValue } from "@/store/StockSlice"





const SingleSlider = (props) => {
  const dispatch = useDispatch();
  const maxValue = 100;
  const [initialValue, setInitialValue] = useState([33]);

  useEffect(() => {
    console.log(initialValue[0][0])
    dispatch(updateStockValue([props.type, initialValue[0][0]]));
  }, [initialValue[0]]);

 

  const [selectedValue, setSelectedValue] = useState("higher"); // Default value

useEffect(()=>{console.log(selectedValue)},[selectedValue])

  const handleRadioChange = (event) => {
    console.log(event.target.value)
    setSelectedValue(event.target.value);
    dispatch(updateRadioValue([props.type, event.target.value]));

  };



  const changeSliderValue = (val) => {
    setInitialValue([val]);
  };

  const changeInputField = (e) => {
    let inputValue = e.target.value;

    // Ensure the value doesn't exceed 100
    if (inputValue > 100) {
      inputValue = 100; // Cap the value at 100
    }

    // Update the state with the validated value
    setInitialValue([inputValue]);
  };

  return (
    <div className="bg-blue-400 flex flex-col justify-center items-start gap-4 border-4 border-black hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-white p-6 rounded-xl shadow-custom">
      <div>
        <HoverCard>
          <HoverCardTrigger>{props.type}</HoverCardTrigger>
          <HoverCardContent className="border-2 border-black">
            {props.summary}
          </HoverCardContent>
        </HoverCard>
      </div>

      <div>
        <input
          type="number"
          className="bg-inherit outline-none text-lg"
          value={initialValue[0]}
          onChange={changeInputField}
          max={maxValue}
          min={0}
        />
      </div>
      <Slider
        onValueChange={changeSliderValue}
        defaultValue={initialValue}
        max={maxValue}
        step={1}
        className="w-32"
      />
      {/* Radio Button Group */}
      <div className="flex items-center space-x-6">
        {/* Higher Option */}
        <HoverCard>
          <HoverCardTrigger>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={`category-${props.id}`} // Unique name
                value="higher"
                checked={selectedValue === "higher"}
                onChange={handleRadioChange}
                className="h-3 w-3 appearance-none rounded-full border-2 border-black checked:bg-black checked:border-black checked:ring-2 checked:ring-white focus:outline-none"
              />
              <span className="text-black">Higher</span>
            </label>
          </HoverCardTrigger>
          <HoverCardContent className="border-2 border-black">
            stocks will be selected with value higher than selected value
          </HoverCardContent>
        </HoverCard>

        {/* Lower Option */}
        <HoverCard>
          <HoverCardTrigger>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={`category-${props.id}`} // Unique name
                value="lower"
                checked={selectedValue === "lower"}
                onChange={handleRadioChange}
                className="h-3 w-3 appearance-none rounded-full border-2 border-black checked:bg-black checked:border-black checked:ring-2 checked:ring-white focus:outline-none"
              />
              <span className="text-black">Lower</span>
            </label>
          </HoverCardTrigger>
          <HoverCardContent className="border-2 border-black">
            stocks will be selected with value lower than selected value
          </HoverCardContent>
        </HoverCard>
      </div>

    </div>
  );
};

export default SingleSlider;
