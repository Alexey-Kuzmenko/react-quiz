import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import apiConfig from "../api/config"

const { url } = apiConfig

export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getQuizzes: build.query({
            query: () => "/quizzes.json",
            transformResponse: (res) => {
                const quizzesArr = []
                Object.keys(res).forEach((hash, index) => {
                    quizzesArr.push({
                        id: hash,
                        name: `Quiz №${index + 1}`
                    })
                })
                return quizzesArr
            }
        }),
        getQuiz: build.query({
            query: (id = "") => `/quizzes${id && `/${id}`}.json`,
        }),
        deleteQuizzes: build.mutation({
            query: () => ({
                url: "/quizzes.json",
                method: "POST",
                body: null
            })
        })
    })
})

export const { useGetQuizzesQuery, useGetQuizQuery } = quizApi

