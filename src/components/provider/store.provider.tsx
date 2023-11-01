"use client"
import { createStore } from "@/redux";
import React from "react";
import { Provider } from "react-redux";

export default function StoreProvider({children}: {children: React.ReactNode}){
    const store = createStore()
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}