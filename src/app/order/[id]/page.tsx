import OrderContainer from "@/container/order.container";
import { store } from "@/redux";
import React from "react";

import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Order - KABANDA',
    description: 'Register'
}

export default function OrderPage({params}: {params:{id:string}}){
    return (
        <div>
            <OrderContainer />
        </div>
    )
}