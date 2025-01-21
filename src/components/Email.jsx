"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import StockService from '../services/StockService'
import { useDispatch, useSelector } from "react-redux"
import { submitYesOrNo } from "@/store/ButtonSlice"
import { toast } from "sonner"



const Email = (props) => {
  // const dispatch = useDispatch()
  const userStockData=useSelector(state=>state.stocks)["stock"]
  const [email,setEmail] = useState("")
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return emailRegex.test(email);
  };
  
  const addEmailToDatabase = async () => {
    if (!validateEmail(email)) {
      // Show error toast for invalid email
      toast.error("❌ Please enter a valid email address!", {
        style: {
          border: "1px solid #f44336",
          padding: "16px",
          color: "#fff",
          backgroundColor: "#f44336",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        duration: 4000, // Display for 4 seconds
        icon: "⚠️", // Optional: Warning icon
      });
      return; // Stop further execution
    }
  
    const errorMessage = await StockService.addStockToDatabase(email, { userStockData });
    console.log(errorMessage);
  
    if (errorMessage["error"] === true) {
      // Show error toast
      toast.error(`❌ ${errorMessage["message"]}`, {
        style: {
          border: "1px solid #f44336",
          padding: "16px",
          color: "#fff",
          backgroundColor: "#f44336",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        duration: 4000, // Display for 4 seconds
        icon: "⚠️", // Optional: Additional icon
      });
    } else {
      // Show success toast
      toast.success("🎉 Your email has been saved successfully!", {
        style: {
          border: "1px solid #4caf50",
          padding: "16px",
          color: "#fff",
          backgroundColor: "#4caf50",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        duration: 3000, // Display for 3 seconds
        icon: "✅",
      });
    }
  };
  
//   useEffect(()=>{
// console.log(email)
//   },[email])

    return (      
  <div className="flex flex-col gap-4">
  <div className="text-3xl">
    Enter your Email Below
  </div>
  <div className="text-center">
  Get daily mail on Nifty 100, Nifty Midcap 100, and Nifty Smallcap 100.  </div>
    <Input type="email" placeholder="Email" onChangeCapture={e => setEmail(e.currentTarget.value)}/>
    <Button 
  onClick={addEmailToDatabase} 
  variant="outline" 
  className="border-2 border-black text-black rounded-md hover:bg-black hover:text-white hover:border-white hover:scale-105 transition-all duration-300"
>
  Submit
</Button>
  </div>

    )
  }
  
  
  export default Email