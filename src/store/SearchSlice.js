import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchState: false,
    value: "",
    showInput: null
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchState: (state) => {
            if (!state.value) state.searchState = !state.searchState
            else state.searchState = true
        },
        showInput: (state) => {
            if (state.searchState) state.showInput = true
        },
        searchVal: (state, action) => {
            state.value = action.payload
        },
        searchRemove: (state) => {
            state.value = ""
        },
        inputRemove: (state) => {
            state.showInput = false
        }
    }
})

export const { searchState, searchVal, showInput, searchRemove, inputRemove } = searchSlice.actions
export default searchSlice.reducer