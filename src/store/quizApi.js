import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import apiConfig from "../api/config"

const { url } = apiConfig

export const quizApi = createApi({
    reducerPath: "quizApi",
    tagTypes: ["Quiz"],
    baseQuery: fetchBaseQuery({ baseUrl: url }),
    endpoints: (build) => ({
        getQuizzesList: build.query({
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
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Quiz', id })),
                        { type: 'Quiz', id: 'LIST' },
                    ]
                    : [{ type: 'Quiz', id: 'LIST' }],
        }),
        getQuiz: build.query({
            query: (id = "") => `/quizzes${id && `/${id}`}.json`,
            invalidatesTags: [{ type: 'Quiz', id: 'LIST' }]
        }),
        addQuiz: build.mutation({
            query: (quiz) => ({
                url: "/quizzes.json",
                method: "POST",
                body: quiz
            }),
            invalidatesTags: [{ type: 'Quiz', id: 'LIST' }]
        }),
        // TODO: add delete quiz functionality
        // deleteQuizzes: build.mutation({
        //     query: (id = "", method) => ({
        //         url: "/quizzes.json",
        //         method: "DELETE",
        //         body: null
        //     }),
        //     invalidatesTags: [{ type: 'Quiz', id: 'LIST' }]
        // })
    })
})

export const { useGetQuizzesListQuery, useGetQuizQuery, useAddQuizMutation } = quizApi

