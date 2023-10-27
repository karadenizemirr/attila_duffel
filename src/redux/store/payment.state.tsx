import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentId: '',
    paymentStatus: false
}

export const fetchPayment = createAsyncThunk('payment/fetchPayment', async (paymentData: any) => {
    // Create Payment
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/createPayment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
    })

    const {ok} = await res.json()

    if (ok) return true

    return false
})

export const {actions, reducer} = createSlice({
    name: 'payment',
    initialState: initialState,
    reducers:{
        setPaymentId: (state, action) => {
            state.paymentId = action.payload
        },
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPayment.fulfilled, (state,action) => {
            state.paymentStatus = action.payload
        })
    }
})