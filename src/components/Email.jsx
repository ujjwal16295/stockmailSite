"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import StockService from '../services/StockService'
import { useDispatch, useSelector } from "react-redux"
import { submitYesOrNo } from "@/store/ButtonSlice"
import { toast } from "sonner"
import Loading from "./Spinner"
import AlertBox from "./AlertBox"



const Email = (props) => {
  // const dispatch = useDispatch()
  const [open,setOpen]=useState(false)
  const userStockData=useSelector(state=>state.stocks)["stock"]
  const [loading,setLoading]=useState(false)
  const [email,setEmail] = useState("")
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return emailRegex.test(email);
  };
  
  const addEmailToDatabase = async () => {
    setLoading(true)
    if (!validateEmail(email)) {
      setLoading(false)
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
    // Filter out objects where `visible` is false
    const filteredStockData = userStockData.filter(stock => stock.visible !== false); 
    console.log(filteredStockData)
    console.log(userStockData)

    const errorMessage = await StockService.addStockToDatabase(email, { filteredStockData });
    console.log(errorMessage);
    setLoading(false)
  
    if (errorMessage["error"] === true) {

      if(errorMessage["message"]=="Document already exists"){
        setOpen(true)

      }else{

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
      }

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
  <div className="flex flex-col gap-4 px-4">
  <div className="text-3xl text-center">
    Enter your Email Below
  </div>
  <div className="text-center">
  Receive a daily email at 6 PM about Nifty 100, Nifty Midcap 100, and Nifty Smallcap 100.   </div>
    <Input type="email" placeholder="Email" onChangeCapture={e => setEmail(e.currentTarget.value)}/>
   {loading==true?<div className="flex flex-col justify-center items-center"><Loading className="" loading={loading}/></div>: <Button 
  onClick={addEmailToDatabase} 
  variant="outline" 
  className="border-2 border-black text-black rounded-md hover:bg-black hover:text-white hover:border-white hover:scale-105 transition-all duration-300"
>
  Submit
</Button>}
<AlertBox open={open} setOpen={setOpen} email={email} data={userStockData.filter(stock => stock.visible !== false)}/>
  </div>

    )
  }
  
  
  export default Email