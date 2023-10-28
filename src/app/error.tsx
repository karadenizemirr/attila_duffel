"use client"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata:Metadata = {
    title: 'Error'
}

export default function error() {
    return (
        <div className="grid grid-cols-12 relative h-[60vh] container mx-auto mt-20" >
            <div className="image col-span-5 relative">
                <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698508219/xw9mhg3ag4jw4ojqzjxl.png" layout="fill" objectFit="center" alt="error" />
            </div>
            <div className="text-content col-span-7 text-center mt-auto mb-auto">
                <div className="error-content p-10 flex flex-col gap-10">
                    <h1 className="text-5xl tex-bold" >
                        Error
                    </h1>
                    <span>
                    A systemic problem was encountered. You may not have an internet connection or you may have tried to take an unexpected action. Please check your internet connection, refresh the page and try again.
                    </span>
                    <Link href="/" className="bg-black p-2 text-white rounded-lg hover:bg-gray-200 duration-200" > 
                        Get Home
                    </Link>
                </div>
            </div>
        </div>
    )
}