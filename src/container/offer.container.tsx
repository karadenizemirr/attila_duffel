"use client"
import OfferCardComponent from "@/components/offerCard/offerCard.component";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function OffersContainer({ data }: { data?: any }) {
    const [spinner, setSpinner] = useState<number>();

    useEffect(() => {
        if (spinner && spinner >= 0){
            toast.success("Offer selected", {
                autoClose: 300
            })
        }
    }, [spinner])
    return (
        <div className="container mx-auto" >
            <div className="title text-center mt-10">
                <h1 className="text-4xl font-bold border-b rounded-full p-2" >
                    Results
                </h1>
            </div>
            <div className="grid grid-cols-12 mt-10">
                {
                    data?.map((item: any, index: number) => (
                        <OfferCardComponent key={index} item={item}>
                            <div className="detail">
                                <Link href={`/offers/detail/` + item.id} className="bg-secondary p-2 rounded-lg hover:bg-gray-200 duration-200" onClick={() => setSpinner(index)}>
                                    {spinner === index ? (
                                        
                                        <span>
                                            Loading...
                                        </span>
                                    ) : (
                                        "Select"
                                    )}
                                </Link>
                            </div>
                        </OfferCardComponent>
                    ))
                }
            </div>
        </div>
    )
}