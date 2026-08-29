import { createSlice } from "@reduxjs/toolkit";


const hamburgerSlice = createSlice({
    name: "hamburgerSlice",
    initialState: {
        value: true,
    },
    reducers: {
        changeVal: (state) => { state.value = !state.value },
    }
});

export const { changeVal } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;