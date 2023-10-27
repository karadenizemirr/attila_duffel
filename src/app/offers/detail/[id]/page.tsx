import DetailContainer  from "@/container/detail.container";
import React from "react";
import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Offer - KABANDA',
    description: 'Register'
}


const getOffer = async (id:string) => {
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/getOffer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })

        const {data} = await res.json()
        return data
    }catch(err){
        return []
    }
}

const getPaymentIntent = async (amount:string, currency:string) => {
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/paymentIntents', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                currency
            })
        })

        const data = await res.json()

        return data?.data
    }catch(err){
        return []
    }
}

const OrderDetailPage = async ({params}: {params: {id:string}}) => {
    const data = await getOffer(params.id)
    const paymentIntent = await getPaymentIntent(data.total_amount, data.total_currency)

    return (
        <div>
            <DetailContainer data={data} payment={paymentIntent} />
        </div>
    )
}

export default OrderDetailPage