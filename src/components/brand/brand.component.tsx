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
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413633/rkgmxqfnru7kvnqy6vkw.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413632/ckdzhc4s5glbrbypz6op.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413631/lsx6b8d0ckop9gyzxujr.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413629/frneg6tfl7iy0ouqrrl4.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413632/q4xfva827ctkc1jhbjwl.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413630/o4g3ci6mlpzccawgpls6.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413633/e6xwkotckxezjrnnydbv.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413631/zkborgpqa9ylxmskmoam.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413631/oiogdsgdfvzkmsnykvmt.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413629/cp4nutn95kciawrhay5l.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413630/fpmmx8qot55ya9gsxj7g.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
                <div className="image-card relative border p-2 rounded-lg shadow-sm h-20 md:col-span-2 col-span-6">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413633/vvk0mdpyfbilrozcx3pm.svg" layout="fill" objectFit="fill" alt="brand" />
                </div>
            </div>
        </div>
    )
}