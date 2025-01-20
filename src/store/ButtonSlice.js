import {createSlice} from "@reduxjs/toolkit"

const initialState={
    submit:false
}

const ButtonSlice=createSlice({
    name:"button",
    initialState,
    reducers:{
        submitYesOrNo(state,action){
            state.submit = action.payload
        },
        
    }
})

export default ButtonSlice.reducer;
export const {submitYesOrNo} =ButtonSlice.actions;
