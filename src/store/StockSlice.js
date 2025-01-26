import {createSlice} from "@reduxjs/toolkit"

const initialState={
    stock:[
        { id: 1, type: "pe", summary: "It shows how much investors are willing to pay for each unit of a company's profit.", value: 33, priority: 1, field: "current_pe", radio: "higher", visible: true },
        { id: 2, type: "debt/equity ratio", summary: "It shows how much debt a company has compared to its own money (equity)", value: 33, priority: 2, field: "debt_equity_ratio", radio: "higher", visible: true },
        { id: 3, type: "dividend yield", summary: "It shows how much money you earn (as a percentage) in dividends for every ₹100 you invest in the stock", value: 33, priority: 3, field: "div_yield", radio: "higher", visible: true },
        { id: 4, type: "peg_ratio", summary: "It combines the PE ratio with the company’s growth rate to check if a stock is fairly priced.", value: 33, priority: 4, field: "peg_ratio", radio: "higher", visible: true },
        { id: 5, type: "roe", summary: "It shows how much profit a company makes for every ₹1 of its own money (equity).", value: 33, priority: 5, field: "roe", radio: "higher", visible: true },
        { id: 6, type: "roce", summary: "It shows how much profit a company makes for every ₹1 of total money (capital) it uses, including both debt and equity.", value: 33, priority: 6, field: "roce", radio: "higher", visible: true },
        { id: 7, type: "cp10", summary: "Compound Profit Growth over 10 years refers to the average annual growth rate of a company's profit over a decade,", value: 33, field: "cp10", radio: "higher", visible: true },
        { id: 8, type: "cp5", summary: "Compound Profit Growth over 5 years refers to the average annual growth rate of a company's profit over 5 years,", value: 33, field: "cp5", radio: "higher", visible: true },
        { id: 9, type: "cp3", summary: "Compound Profit Growth over 3 years refers to the average annual growth rate of a company's profit over 3 years,", value: 33, field: "cp3", radio: "higher", visible: true },
        { id: 10, type: "pttm", summary: "Trailing Twelve Month (TTM) Profit Growth measures the percentage increase or decrease in a company's profit over the last 12 months compared to the previous 12-month period.", value: 33, field: "pttm", radio: "higher", visible: true },
        { id: 11, type: "csg10", summary: "Compound Sales Growth over 10 years refers to the average annual growth rate of a company's sales revenue over a decade", value: 33, field: "csg10", radio: "higher", visible: true },
        { id: 12, type: "csg5", summary: "Compound Sales Growth over 5 years refers to the average annual growth rate of a company's sales revenue over 5 years", value: 33, field: "csg5", radio: "higher", visible: true },
        { id: 13, type: "csg3", summary: "Compound Sales Growth over 3 years refers to the average annual growth rate of a company's sales revenue over 3 years", value: 33, field: "csg3", radio: "higher", visible: true },
        { id: 14, type: "sttm", summary: "Trailing Twelve Month (TTM) Sales Growth measures the percentage increase or decrease in a company's sales over the last 12 months compared to the previous 12-month period.", value: 33, field: "sttm", radio: "higher", visible: true },
        { id: 15, type: "median pe", summary: "The median Price-to-Earnings (P/E) ratio of a stock represents the middle value of its P/E ratios over a specific period", value: 33, field: "medianPe", radio: "higher", visible: true }
      ]
      ,
      visible:{
         "pe": true ,
          "debt/equity ratio":true,
         "dividend yield":true,
         "peg_ratio":true,
         "roe":true,
        "roce":true,
        "cp10":true,
        "cp5":true,
         "cp3":true,
         "pttm":true,
        "csg10":true,
         "csg5":true,
          "csg3":true,
       "sttm":true,
       "median pe" :true }
      
      
      
      
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

        },
        updateVisibleValue(state,action){
            for(let i =0;i<state.stock.length;i++){
                //action.payloiad[0] is type name which i edit on value change
                //action.payload[1] is value itself 
                if(state.stock[i]["type"]==action.payload[0]){
                    state.stock[i]["visible"]=action.payload[1]
                }
            }
            state.visible[action.payload[0]]=action.payload[1]

        }
    }
})

export default StockSlice.reducer;
export const {addStock,updateStockValue,updateRadioValue,updateVisibleValue} =StockSlice.actions;
