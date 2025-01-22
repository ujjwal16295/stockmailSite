import {createSlice} from "@reduxjs/toolkit"

const initialState={
    stock:[
        { id: "1", type: "pe", summary: "It shows how much investors are willing to pay for each unit of a company's profit.", value: 33, priority: 1, field: "current_pe", radio: "higher" },
        { id: "2", type: "debt/equity ratio", summary: "It shows how much debt a company has compared to its own money (equity)", value: 33, priority: 2, field: "debt_equity_ratio", radio: "higher" },
        { id: "3", type: "dividend yield", summary: "It shows how much money you earn (as a percentage) in dividends for every ₹100 you invest in the stock", value: 33, priority: 3, field: "div_yield", radio: "higher" },
        { id: "4", type: "peg_ratio", summary: "It combines the PE ratio with the company’s growth rate to check if a stock is fairly priced.", value: 33, priority: 4, field: "peg_ratio", radio: "higher" },
        { id: "5", type: "roe", summary: "It shows how much profit a company makes for every ₹1 of its own money (equity).", value: 33, priority: 5, field: "roe", radio: "higher" },
        { id: "6", type: "roce", summary: "It shows how much profit a company makes for every ₹1 of total money (capital) it uses, including both debt and equity.", value: 33, priority: 6, field: "roce", radio: "higher" }
      ]
      
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
        },
        updateRadioValue(state,action){
            for(let i =0;i<state.stock.length;i++){
                //action.payloiad[0] is type name which i edit on value change
                //action.payload[1] is value itself 
                if(state.stock[i]["type"]==action.payload[0]){
                    state.stock[i]["radio"]=action.payload[1]
                }
            }

        }
    }
})

export default StockSlice.reducer;
export const {addStock,updateStockValue,updateRadioValue} =StockSlice.actions;
