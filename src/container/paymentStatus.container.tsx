"use client"
import { store } from "@/redux";
import Image from "next/image";
import React from "react";

export default function PaymentStatusContainer({ payment }: { payment?: boolean }) {
    const state = store.getState()
    console.log(state)
    return (
        <div className="container mx-auto h-[80vh] flex flex-1 justify-center items-center" >

            {payment ? (<div className="success-container text-center flex flex-col items-center">
                <Image src="/images/icons/checked.png" width={200} height={200} alt="success" />
                <h1 className="mt-5 text-3xl" >
                    Payment Success
                </h1>
                <button className="bg-black text-white p-3 rounded-lg mt-5 hover:bg-gray-200 duration-200" >
                    Get Order Pass
                </button>
            </div>) : (<div className="unsuccess-container text-center flex flex-col items-center">
                <Image src="/images/icons/cancel.png" width={200} height={200} alt="success" />
                <h1 className="mt-5 text-3xl" >
                    Payment Not Success
                </h1>
                <button className="bg-black text-white p-3 rounded-lg mt-5 hover:bg-gray-200 duration-200" >
                    Get Search Ticket
                </button>
            </div>)}
        </div>
    )
}