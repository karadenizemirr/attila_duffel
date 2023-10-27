"use client"
import OfferCardComponent from "@/components/offerCard/offerCard.component";
import { store } from "@/redux";
import { actions } from "@/redux/store/checkout.state";
import Link from "next/link";

export default function DetailContainer({ data, payment }: { data: any, payment: any }) {
    const handleSetStateClick = () => {
        store.dispatch(actions.setPaymentIntent(payment))
        store.dispatch(actions.setOfferData(data))
    }

    return (
        <div className="container mx-auto flex flex-col items-center" >
            <div className="title mt-10 mb-10">
                <h1 className="text-4xl text-center" >
                    Ticket
                </h1>
            </div>
            <div className="w-full md:w-1/2">
                <OfferCardComponent item={data}>
                    <div className="detail">
                        <Link 
                            href={`/checkout`} 
                            className="bg-secondary p-2 rounded-lg hover:bg-gray-200 duration-200" 
                            onClick={handleSetStateClick}
                            >
                            Checkout
                        </Link>
                    </div>
                </OfferCardComponent>
            </div>
        </div>
    )
}
