import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GetOrders(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') return res.status(405).json({ ok: false })

        const orders = await prisma.user.findMany(
            {
                where: {
                    id: req.body.id
                },
                include: {
                    orders: true
                }
            }
        )

        return res.status(200).json({ ok: true, orders: orders[0].orders })

    } catch (err) {
        return res.status(500).json({ ok: false })
    }
}