import OffersContainer from "@/container/offer.container";
import React from "react";


import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'All Offer - KABANDA',
    description: 'Register'
}

const getOffer = async (id: string) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/listOffer?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const { data } = await res.json()
        return data
    } catch (err) {
        return []
    }
}

export const fetchCalculateCurrency = async (c: string, amount: string) => {
    try {

        const url = `https://api.api-ninjas.com/v1/convertcurrency?have=GBP&want=${c}&amount=${amount}`
        const res = await fetch(url, {
            headers: {
                'X-Api-Key': process.env.NEXT_PUBLIC_EXCHANGE_API as string
            }
        })

        const { new_amount } = await res.json()
        return new_amount

    } catch (err) {
        return null
    }
}

export default async function OffersPage({ params, searchParams }: { params: { id: string }, searchParams: {currrencyCode: string} }) {
    const data = await getOffer(params.id)

    const new_amount = await Promise.all(data.map(async (item: any) => {
        const amount = await fetchCalculateCurrency(searchParams.currrencyCode||'GBP', item.base_amount);
        item.new_amount = amount;
        item.new_currency = searchParams.currrencyCode ||'GBP'
        return item;
    }));
    return (
        <div>
            <OffersContainer data={data} />
        </div>
    )
}