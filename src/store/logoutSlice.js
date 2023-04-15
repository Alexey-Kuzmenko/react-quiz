import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const autoLogout = createAsyncThunk(
    "logoutSlice/autoLogout",
    async function (_, { dispatch, rejectWithValue, getState }) {
        const time = getState().logout.expiration
        try {
            setTimeout(() => {
                dispatch(closeSession())
            }, time * 1_000)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const logoutSlice = createSlice({
    name: "logout",
    initialState: {
        token: null,
        expiration: null
    },
    reducers: {
        saveSession: (state, action) => {
            const expirationDate = new Date(new Date().getTime() + action.payload.expiresIn * 1000)
            localStorage.setItem("token", action.payload.tokenId)
            localStorage.setItem("userId", action.payload.userId)
            localStorage.setItem("expiration", expirationDate)

            state.token = action.payload.tokenId
            state.expiration = action.payload.expiresIn
        },
        closeSession: (state) => {
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("expiration")

            state.token = null
            state.expiration = null
        }
    },
    extraReducers: {
        [autoLogout.pending]: () => {
            console.log('Logout in progress');
        },
        [autoLogout.fulfilled]: () => {
            console.log('Logout successfully');
        },
        [autoLogout.rejected]: (action) => {
            console.error(action.payload);
        },
    }
})

export const { saveSession, closeSession } = logoutSlice.actions

export default logoutSlice.reducer