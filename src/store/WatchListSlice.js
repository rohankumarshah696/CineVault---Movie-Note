import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    values: JSON.parse(localStorage.getItem("movies")) || []
}

const watchListslice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addToWatchList: (state, action) => {
            if (!state.values.includes(action.payload))
                state.values = [...state.values, action.payload]
            localStorage.setItem("movies", JSON.stringify(state.values))
            console.log(state.values);

        },
        removeWatchList: (state, action) => {
            if (state.values.some(movie => movie.id === action.payload.id)) {
                state.values = state.values.filter(
                    movie => movie.id !== action.payload.id
                )

                localStorage.setItem(
                    "movies",
                    JSON.stringify(state.values)
                )

                console.log(state.values)
            }
        }
    }
}
)

export const { addToWatchList, removeWatchList } = watchListslice.actions
export default watchListslice.reducer