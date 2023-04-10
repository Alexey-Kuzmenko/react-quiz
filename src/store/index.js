import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { quizApi } from "./quizApi";


const store = configureStore({
    reducer: {
        [quizApi.reducerPath]: quizApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware)
})

export default store