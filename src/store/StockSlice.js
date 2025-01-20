import {createSlice} from "@reduxjs/toolkit"

const initialState={
    stock:[ { id: "1", type: "pe", summary: "PE Ratio","value":33,"priority":1 },
    { id: "2", type: "debt/equity ratio", summary: "Debt to Equity","value":33,"priority":2 },
    { id: "3", type: "dividend yield", summary: "Dividend Yield","value":33,"priority":3 },
    { id: "4", type: "peg_ratio", summary: "PEG Ratio","value":33,"priority":4 },
    { id: "5", type: "roe", summary: "Return on Equity","value":33,"priority":5 },
    { id: "6", type: "roce", summary: "Return on Capital Employed","value":33 ,"priority":6},]
}

const StockSlice=createSlice({
    name:"stock",
    initialState,
    reducers:{
        addStock(state,action){
            state.stock = action.payload
        },
        updateStockValue(state,action){
            for(let i =0;i<state.stock.length;i++){
                //action.payloiad[0] is type name which i edit on value change
                //action.payload[1] is value itself 
                if(state.stock[i]["type"]==action.payload[0]){
                    state.stock[i]["value"]=action.payload[1]
                }
            }
        }
    }
})

export default StockSlice.reducer;
export const {addStock,updateStockValue} =StockSlice.actions;
