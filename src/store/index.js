import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { quizApi } from "./quizApi";
import { authApi } from "./authApi";
import logoutSlice from "./logoutSlice";

const store = configureStore({
    reducer: {
        [quizApi.reducerPath]: quizApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        logout: logoutSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        quizApi.middleware,
        authApi.middleware
    ])
})

export default store