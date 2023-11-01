import PaymentStatusContainer from "@/container/paymentStatus.container";
import React from "react";

const getPaymentStatus = async (id:string) => {
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/paymentStatus', {
            method:'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                id: id
            })
        })

        const {ok} = await res.json()

        if (ok){
            return true
        }

        return false

    }catch(err){

    }
}

export default async function PaymentStatusPage({params}: {params: {id:string}}){
    const status = await getPaymentStatus(params.id)
    return (
        <div>
            <PaymentStatusContainer payment={status} />
        </div>
    )
}