import PaymentContainer from "@/container/payment.container";
import React from "react";

import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Payment - KABANDA',
    description: 'Register'
}

export default function PaymentPage(){
    return (
        <div>
            <PaymentContainer />
        </div>
    )
}