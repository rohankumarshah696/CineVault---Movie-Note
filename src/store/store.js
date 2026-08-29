import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from './HamburgerSlice'
const store = configureStore({
    reducer: {
        hamburgerMenu: hamburgerReducer,

    }
})

export default store;