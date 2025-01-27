"use client"
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import StockService from '../services/StockService'
import { toast } from 'sonner'


 const AlertBox = (props) => {

    const alerClick = async()=>{
        const errorMessage = await StockService.updateStockInDatabase(props.email,props.data)
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
    }
    

  return (
    <AlertDialog open={props.open} onOpenChange={props.setOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        Your Email exists in the database do you want to change your parameters?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>No</AlertDialogCancel>
      <AlertDialogAction><div onClick={alerClick}>Yes</div></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default AlertBox