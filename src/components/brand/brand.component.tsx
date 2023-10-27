import Image from "next/image";
import React from "react";

export default function BrandComponent() {
    return (
        <div className="mx-auto container mt-10 mb-10 ">
            <div className="title mt-5 mb-10 text-center">
                <h1 className="text-4xl" >
                    Popular <span className="text-secondary italic" >Airlines</span>
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-10" >
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4 ">
                    <Image src="/images/icons/turkishairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/airblue.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/pegasusairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/airberlin.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/egyptair.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/mexicanadeaviación.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/amcairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/unitedairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/salamair.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/nordwindairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/shreeairlines.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-4">
                    <Image src="/images/icons/loganair.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
            </div>
        </div>
    )
}