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

export const keepSession = createAsyncThunk(
    "logoutSlice/autoLogout",
    async function (_, { dispatch, rejectWithValue }) {
        try {
            const tokenId = localStorage.getItem("token")
            const userId = localStorage.getItem("userId")

            if (!tokenId) {
                dispatch(closeSession())
            } else {
                const expirationDate = new Date(localStorage.getItem("expiration"))

                if (expirationDate <= new Date()) {
                    dispatch(closeSession())
                } else {
                    //  TODO: fix bug with expires in value
                    dispatch(saveSession({ tokenId, userId, expiresIn: 3600 }))
                    dispatch(autoLogout())
                }
            }
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
            const expirationDate = new Date(new Date().getTime() + action.payload.expiresIn * 1_000)

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
        },
    },
    extraReducers: {
        [autoLogout.pending]: () => {
            console.log('Logout in progress');
        },
        [autoLogout.fulfilled]: () => {
            console.log('Logout successfully');
        },
        [autoLogout.rejected]: (action) => {
            console.error(`Fail to logout, error type: ${action.payload}`);
        },
        [keepSession.rejected]: (action) => {
            console.error(`Fail to keep session, error type: ${action.payload}`);
        },
    }
})

export const { saveSession, closeSession } = logoutSlice.actions

export default logoutSlice.reducer