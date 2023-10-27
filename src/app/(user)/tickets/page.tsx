import TicketsContainer from "@/container/user/tickets.container";
import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

const getTickets = async () => {
    try{
        const {user} = await getServerSession(authOption)
        const res = await fetch(process.env.NEXT_PUBLIC_API + '/user/getOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: user.id
                }
            )
        })

        const {orders} = await res.json()
        return orders
    }catch(err){
        return []
    }
}

export default async function TicketsPage() {
    const data = await getTickets()
    
    return (
        <div>
            <TicketsContainer orders={data} />
        </div>
    )
}