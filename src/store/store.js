import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './HamburgerSlice'
import SearchReducer from "./SearchSlice";

const store = configureStore({
    reducer: {
        hamburgerMenu: hamburgerReducer,
        search: SearchReducer,
    }
})

export default store;