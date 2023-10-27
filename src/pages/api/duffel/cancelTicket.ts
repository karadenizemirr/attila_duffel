import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function CancelTicket(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(500).json({ok:false})

        // Create Operations
        const {id} = req.body
        const {data} = await duffel.orderCancellations.create({
            order_id: id
        })

        const confirm = await duffel.orderCancellations.confirm(data.id)

        if (confirm){
            return res.status(200).json({ok: true})
        }

        return res.status(200).json({ok: true})
    }catch(err){
        return res.status(500).json({ok:false})
    }
}