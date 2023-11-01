import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    paymentIntent: {},
    offerData: {},
    orderData: {}
}
export const {actions, reducer} = createSlice({
    name: 'checkout',
    initialState: initialState,
    reducers:{
        setPaymentIntent: (state,action) => {
            state.paymentIntent = action.payload
        },
        setOfferData: (state,action) => {
            state.offerData = action.payload
        },
        setOrderData: (state,action) => {
            state.orderData = action.payload
        }
    }
})