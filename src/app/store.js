import booksReducer from "../features/BookSlice";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    },
});

export default store;