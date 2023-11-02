import OffersContainer from "@/container/offer.container";
import React from "react";

import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'All Offer - KABANDA',
    description: 'Register'
}

const getOffer = async (id:string) => {
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/listOffer?id=' + id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const {data} = await res.json()
        return data

    }catch(err){
        return []
    }
}

export default async function OffersPage({params}: {params: {id: string}}){
    const data = await getOffer(params.id)
    return (
        <div>
            <OffersContainer data={data} />
        </div>
    )
}