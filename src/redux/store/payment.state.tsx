import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: ''
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

    const {ok, status, data} = await res.json()

    console.log(data)

    return data
})

export const {actions, reducer} = createSlice({
    name: 'payment',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPayment.fulfilled, (state,action) => {
            state.orderId = action.payload.id
        })
    }
})