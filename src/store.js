import { configureStore } from "@reduxjs/toolkit";
import helperSlice from "./Slice/helperSlice";

const store = configureStore({
    reducer: {
        helperReducer: helperSlice,
    }
})

export default store;