import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getOrder(req:NextApiRequest, res:NextApiResponse){
    try{

        if (req.method !== 'POST') return res.status(405).json({ ok: false })

        const {id} = req.body

        const {data} =await duffel.orders.get(id)
        return res.status(200).json({ok:true, data})


    }catch(err){
        return res.status(500).json({ok:false})
    }
}