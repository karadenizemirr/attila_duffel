import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') return res.status(405).json({ ok: false })
        const { currency, amount } = req.body

        const calculateAmount = (amount + 10) / (1 - 0.029)

        const paymentIntents:any = await duffel.paymentIntents.create({
            currency: currency,
            amount: String(calculateAmount.toFixed(2))
        })
    
        return res.status(200).json({ ok: true, data: paymentIntents })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ ok: false })
    }
}