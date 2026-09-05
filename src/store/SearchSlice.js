import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchState: false,
    value: "",
    showInput: null,
    searchStatus: false,
    
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchState: (state) => {
            if (!state.value) {
                state.searchState = !state.searchState
                state.searchStatus=false
            }
            else {
                state.searchState = true
                state.searchStatus=true
            }
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