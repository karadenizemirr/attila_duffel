import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currency: 'USD'
}

export const {actions, reducer} = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency: (state,action) => {
            state.currency = action.payload
        }
    }
})