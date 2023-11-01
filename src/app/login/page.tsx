import LoginContainer from "@/container/login.container";
import React from "react";

import { Metadata } from "next";
export const metadata:Metadata = {
    title: 'Login - KABANDA',
    description: 'Register'
}

export default function LoginPage(){
    return (
        <>
            <LoginContainer />
        </>
    )
}