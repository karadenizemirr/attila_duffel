import { duffel } from "@/lib/duffel";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { twilio_sms } from "@/lib/twilio";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') return res.status(405).json({ ok: false })
        const { data } = req.body
        const newPassenger = dataParser(data.orderData, data.passengers, data.orderData.phone, data.orderData.email)
        const confirmPayment = await fetch(process.env.NEXT_PUBLIC_API + '/duffel/confirmPayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ paymentId: data.intentId })
        })

        const { status, confirmData } = await confirmPayment.json()

        if (status === 'succeeded') {
            const createPaymentAndOrder: any = await duffel.orders.create(
                {
                    selected_offers: [data.offerId],
                    payments: [
                        {
                            type: data.payments[0].type,
                            amount: data.payments[0].amount,
                            currency: data.payments[0].currency,
                        }
                    ],
                    passengers: newPassenger.passenger,
                    type: 'instant'
                }
            )

            // Send Sms
            await twilio_sms(data.orderData.phone, `Your ticket: ${process.env.NEXT_PUBLIC_URL}/order/detail/${createPaymentAndOrder.data.id}`)

            // User Control

            const userControl = await prisma.user.findUnique({
                where: {
                    phone: data.orderData.phone
                }
            })

            if (userControl) {
                // Save Data
                await prisma.order.create(
                    {
                        data: {
                            orderId: createPaymentAndOrder.data.id,
                            where: data.location.where,
                            from: data.location.from,
                            date: data.location.date,
                            price: data.payments[0].amount,
                            userId: userControl.id,
                        }
                    }
                )
            }

            return res.status(200).json({ ok: true, status: status, data: createPaymentAndOrder.data })
        }

        return res.status(200).json({ ok: false, status: false })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ ok: false })
    }
}


function dataParser(orderData: any, passengers?: any, phone?: string, email?: string) {
    const passengerData: any = {};
    Object.entries(orderData).forEach(([key, value]) => {
        const match = key.match(/(\D+)(\d+)/); // Match the non-digit part and the digit part of the key

        if (match) {
            const field = match[1]; // Non-digit part of the key
            const index = match[2]; // Digit part of the key

            if (!passengerData['passenger']) {
                passengerData['passenger'] = [];
            }
            if (!passengerData['passenger'][index]) {
                passengerData['passenger'][index] = {};
            }
            passengerData['passenger'][index] = {
                ...passengerData['passenger'][index],
                [field]: value,
                id: passengers[index].id,
                type: 'adult',
                phone_number: phone,
                email: email
            };
        } else {
            passengerData[key] = value;
        }
    });
    return passengerData;
}