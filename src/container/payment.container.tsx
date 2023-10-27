"use client"
import { store } from "@/redux";
import React from "react";
import { DuffelPayments } from '@duffel/components'
import { fetchPayment } from "@/redux/store/payment.state";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Image from "next/image";


export default function PaymentContainer() {
    const state = store.getState()
    const { checkout }: { checkout: any } = state
    const cli_token: any = checkout.paymentIntent?.data?.client_token || ""

    const [paymentStatus, setPaymentStatus] = React.useState<boolean>(false)

    const { data: session }: { data: any } = useSession()
    const userId = session?.user?.id

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
                                toast.success('Payment Success')
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
                                    draggable: false,
                                })

                            }}
                            onFailedPayment={(err: any) => {
                                toast.error('Payment Failed')
                                setPaymentStatus(false)
                            }}
                        />
                    </div>
                    <div className="logo flex flex-1 justify-around mt-5">
                        <Image src="/images/icons/stripe.svg" width={110} height={50} alt="stripe" />
                        <Image src="/images/icons/duffel.svg" width={110} height={50} alt="stripe" />
                        <Image src="/images/icons/visa.svg" width={90} height={50} alt="stripe" />
                        <Image src="/images/icons/mastercard.svg" width={60} height={50} alt="stripe" />
                    </div>
                </div>

            </div>
        </div>
    )
}