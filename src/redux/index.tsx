import { configureStore } from "@reduxjs/toolkit";
import {reducer as checkoutReducer} from './store/checkout.state'
import {reducer as paymentReducer} from './store/payment.state'
import {reducer as operationReducer} from './store/operations.state'
import {reducer as currencyReducer} from './store/currency.state'

export function createStore(preloaderState = {}){
    const store = configureStore({
        reducer: {
            checkout: checkoutReducer,
            payment: paymentReducer,
            operation: operationReducer,
            currency: currencyReducer
        },
    })

    return store;
}

export const store = createStore()
