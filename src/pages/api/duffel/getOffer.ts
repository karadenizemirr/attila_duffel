import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(405).json({ok:false})

        const {id} = req.body

        const offer = await duffel.offers.get(id)

        return res.status(200).json({ok:true, data:offer.data})
    }catch(err){
        console.log(err)
        return res.status(500).json({ok:false})
    }
}