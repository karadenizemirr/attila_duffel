import RegisterContainer from "@/container/register.container";
import React from "react";

import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Register - KABANDA',
    description: 'Register'
}

export default function RegisterPage(){
    return (
        <div className="container mx-auto" >
            <RegisterContainer />
        </div>
    )
}