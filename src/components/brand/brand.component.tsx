import Image from "next/image";
import React from "react";

export default function BrandComponent() {
    return (
        <div className="mx-auto container mt-10 mb-10 overflow-hidden ">
            <div className="title mt-5 mb-10 text-center">
                <h1 className="text-4xl" >
                    Popular <span className="text-secondary italic" >Airlines</span>
                </h1>
            </div>
            <div className="grid grid-cols-12 md:gap-10" >
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6 ">
                    <Image src="/images/icons/turkishairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/britishairways.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/lufthansa.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/airfrance.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/ryanair.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/easyjet.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/tapairportugal.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/klm.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/pegasusairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/sasbraathens.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/finnair.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="/images/icons/loganair.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
            </div>
        </div>
    )
}