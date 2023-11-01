"use client"
import OfferCardComponent from "@/components/offerCard/offerCard.component";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function OffersContainer({ data }: { data?: any }) {
    const [spinner, setSpinner] = useState<number>();

    useEffect(() => {
        if (spinner && spinner >= 0) {
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
            <div className="filters mt-10 mb-10 border p-3 rounded-lg shadow-sm grid grid-cols-12">
                <div className="filters col-span-8">
                    sad
                </div>
                <div className="search col-span-4">
                    <input type="text" className="form-element w-full p-2 rounded-lg text-sm" placeholder="Search Keyword" />
                </div>
            </div>
            <div className="mt-10 text-center flex flex-col items-center justify-center">
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