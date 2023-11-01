import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(405).json({ statusCode: 405, ok:false });

        const { paymentId } = req.body;

        const confirmPayment = await duffel.paymentIntents.confirm(paymentId);
        return res.status(200).json({ statusCode: 200, ok:true, status: confirmPayment.data.status,confirmData: confirmPayment.data });

    }catch(err){
        res.status(500).json({ statusCode: 400, ok:false });
    }
}