import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiConfig from "../api/config";

const { authApi: authApiUrl, apiKey } = apiConfig

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: authApiUrl }),
    endpoints: (build) => ({
        authUser: build.mutation({
            query: ({ body, isLogin }) => ({
                url: isLogin ? `/accounts:signInWithPassword?key=${apiKey}` : `/accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: JSON.stringify(body)
            })
        }),
    })
})

export const { useAuthUserMutation } = authApi
