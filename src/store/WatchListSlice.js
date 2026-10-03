import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    values: JSON.parse(localStorage.getItem("items")) || [],
    stateVal: "Movies"
}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        setMovie_Tv: (state, action) => {
            state.stateVal = action.payload
        },
        addToWatchList: (state, action) => {
            if (!state.values.some(movie => movie.id === action.payload.id)) {
                state.values = [...state.values, action.payload]
            }

            localStorage.setItem(
                "items",
                JSON.stringify(state.values)
            )
        },
        removeWatchList: (state, action) => {
            if (state.values.some(movie => movie.id === action.payload.id)) {
                state.values = state.values.filter(
                    movie => movie.id !== action.payload.id
                )

                localStorage.setItem(
                    "items",
                    JSON.stringify(state.values)
                )

                console.log(state.values)
            }
        }
    }
}
)

export const { addToWatchList, removeWatchList, setMovie_Tv } = watchListSlice.actions
export default watchListSlice.reducer