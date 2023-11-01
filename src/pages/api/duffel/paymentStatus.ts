import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function paymentStatus(req:NextApiRequest, res:NextApiResponse){
    try{
        if(req.method !== 'POST') return res.status(400).json({ok:false})

        const {id} = req.body
        const {data} = await duffel.paymentIntents.confirm(id)

        if (data.status === 'succeeded') return res.status(200).json({ok: true})

        return res.status(400).json({ok: false})
    }catch(err){
        return false
    }
}