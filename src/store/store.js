import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './HamburgerSlice'
import SearchReducer from "./SearchSlice";
import watchListReducer from './WatchListSlice'
const store = configureStore({
    reducer: {
        hamburgerMenu: hamburgerReducer,
        search: SearchReducer,
        watchList: watchListReducer,
    }
})

export default store;