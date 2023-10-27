import React from "react";
import { Metadata } from "next";
import OrderDetailContainer from "@/container/orderDetail.container";
import { store } from "@/redux";
export const metadata:Metadata = {
    title: 'Order Detail - KABANDA',
    description: 'Register'
}

const getOrder = async (id:string) => {
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/getOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })

        const {order} = await res.json()

        return order

        
    }catch(err){
        return []
    }
}
export default async function OrderPage({params}:{params: {id:string}}){
    const order = await getOrder(params.id.replace('%', '_'))
    return (
        <div className="container mx-auto" >
            <OrderDetailContainer order={order.data}/>
        </div>
    )
}