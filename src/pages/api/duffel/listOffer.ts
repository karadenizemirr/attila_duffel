import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'GET') return res.status(405).json({ok: false, message: 'Method not allowed'})

        const {id} = req.query

        const {data} = await duffel.offers.list({
            offer_request_id: id as string,
            limit: 200
        })
        return res.status(200).json({ok: true, data:data})

    }catch(err){
        return res.status(500).json({ok: false})
    }
}