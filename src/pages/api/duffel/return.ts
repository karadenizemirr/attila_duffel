import { createPassenger } from "@/lib/passenger";
import { Duffel } from "@duffel/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req:NextApiRequest, res:NextApiResponse){
    try{
        if (req.method !== 'POST') return res.status(405).json({ok: false, error: 'Method not allowed'})
        const data = req.body
        const duffel = new Duffel(
            {
                token: process.env.NEXT_PUBLIC_DUFFEL_API_KEY as string
            }
        )

        const passengers:any = createPassenger(data.adult, data.child)
        const offerRequest:any = await duffel.offerRequests.create({
            slices:[
                {
                    origin: data.origin,
                    destination: data.destination,
                    departure_date: data.departure_date,
                },
                {
                    origin: data.destination,
                    destination: data.origin,
                    departure_date: data.return_date,
                }
            ],
            passengers:passengers,
            cabin_class: data.class_type
        })

        return res.status(200).json({ok: true, id: offerRequest.data.id})
    }catch(err){

        console.log(err)
        return res.status(500).json({ok: false})
    }
}