"use client"
import { Slider } from "@/components/ui/slider"
import {  useEffect, useState } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useDispatch } from "react-redux"
import { updateStockValue } from "@/store/StockSlice"



const SingleSlider = (props) => {
  const dispatch= useDispatch()

 

  const maxValue = 100
  const [initialValue,setInitialValue] = useState([33])
  useEffect(() => {
    dispatch(updateStockValue([props.type, initialValue[0]]));
}, [initialValue[0]]);

  
  const changeSliderValue=(val)=>{
    setInitialValue([val])
  }
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
<div className=" bg-blue-400 flex flex-col justify-center items-start gap-4 border-4 border-black hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-white p-6  rounded-xl shadow-custom ">
<div>
<HoverCard>
  <HoverCardTrigger>  {props.type}
</HoverCardTrigger>
  <HoverCardContent className="border-2 border-black">
  {props.summary}
  </HoverCardContent>
</HoverCard>
</div>

<div>
<input type="number" class="bg-inherit outline-none text-lg" value={initialValue[0]} onChange={changeInputField} max={maxValue} min={0}/>
</div>
<Slider onValueChange={changeSliderValue} defaultValue={initialValue} max={maxValue} step={1} className="w-32" />
</div>


  )
}


export default SingleSlider