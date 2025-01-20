import { configureStore } from "@reduxjs/toolkit";
import StockSlice from "./StockSlice";
import ButtonSlice from "./ButtonSlice";


const store=configureStore({
    reducer:({
        stocks:StockSlice,
        submit:ButtonSlice,

    })
})

export default store