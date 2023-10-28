"use client"
import { store } from "@/redux";
import React, { useEffect } from "react";
import { DuffelPayments } from '@duffel/components'
import { fetchPayment } from "@/redux/store/payment.state";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";


export default function PaymentContainer() {
    const state = store.getState()
    const { checkout }: { checkout: any } = state
    const cli_token: any = checkout.paymentIntent?.data?.client_token || ""

    const [paymentStatus, setPaymentStatus] = React.useState<boolean>(false)
    const [orderId, setOrderId] = React.useState<string>("")

    const { data: session }: { data: any } = useSession()
    const userId = session?.user?.id

    useEffect(() => {
        setOrderId(state.payment.orderId)

        if (orderId){
            redirect('/order/detail/' + orderId)
        }
    })
    return (
        <div className="container mx-auto" >
            <div className="payment-card w-full h-[70vh] flex items-center justify-center">
                <div className="payment text-center border p-10 rounded-lg md:w-1/2 w-full">
                    <h1 className="text-3xl mb-10" >
                        Payment <span className="text-secondary" >Now</span>
                    </h1>
                    <div className="payment flex flex-1 justify-center items-center">
                        <DuffelPayments
                            paymentIntentClientToken={cli_token}
                            onSuccessfulPayment={() => {
                                setPaymentStatus(true)

                                const data = {
                                    offerId: checkout.offerData.id,
                                    payments: [
                                        {
                                            type: 'balance',
                                            currency: checkout.offerData.total_currency,
                                            amount: checkout.offerData.total_amount,
                                        }
                                    ],
                                    passengers: checkout.offerData.passengers,
                                    orderData: state.checkout.orderData,
                                    intentId: state.checkout.paymentIntent?.data.id,
                                    userId: userId,
                                    location: {
                                        where: state.checkout.offerData.slices[0].destination.name,
                                        from: state.checkout.offerData.slices[0].origin.name,
                                        date: state.checkout.offerData.slices[0].segments[0].arriving_at,
                                    }
                                }
                                store.dispatch(fetchPayment({
                                    data
                                }))

                                toast.info('Your ticket has been sent as sms.',{
                                    position: 'top-center',
                                    autoClose: false,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: false,
                                    draggable: true,
                                })
                                toast.loading('Plase wait', {
                                    position: 'top-center'
                                })
                            }}

                            onFailedPayment={(err: any) => {
                                toast.error('Payment Failed')
                                setPaymentStatus(false)
                            }}
                        />
                    </div>
                    <div className="logo flex flex-1 justify-around mt-5">
                        <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413633/smmox3wvfb5srks5kdlf.svg" width={110} height={50} alt="stripe" />
                        <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413630/rgf5wgsaf4dq4ktf8daq.svg" width={110} height={50} alt="stripe" />
                        <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413634/tz5o1opcjn6kvik7vkfl.svg" width={90} height={50} alt="stripe" />
                        <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413631/brvkoxsme9eyyzkg5s2d.svg" width={60} height={50} alt="stripe" />
                    </div>
                </div>

            </div>
        </div>
    )
}