"use client"

import Image from "next/image"
import Link from "next/link"

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
                        Your ticket information has been reset. Please create a ticket again. If the error persists, please contact your administrator.
                    </span>
                    <Link href="/" className="bg-black p-2 text-white rounded-lg hover:bg-gray-200 duration-200" > 
                        Get Home
                    </Link>
                </div>
            </div>
        </div>
    )
}