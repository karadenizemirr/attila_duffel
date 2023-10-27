import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCancel: false
}

export const fetchIsCancel = createAsyncThunk('operations/fetchIsCancel', async (id: string) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/cancelTicket', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        })

        const { ok } = await res.json()

        if (ok) {
            return true
        }

        return false

    } catch (err) {
        return false
    }
})

export const { actions, reducer } = createSlice({
    name: 'operationState',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchIsCancel.fulfilled, (state, action) => {
            state.isCancel = action.payload
        })
    }

})