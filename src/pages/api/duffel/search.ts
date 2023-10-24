import { Duffel } from "@duffel/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Search(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== 'POST') return res.status(405).end();
    const {query} = req.body;

    const duffel = new Duffel({
        token: process.env.NEXT_PUBLIC_DUFFEL_API_KEY as string,
    })

    const search = await duffel.suggestions.list(
        {
            "query": query
        }
    )

    const {data} = search

    return res.status(200).json(data)
}