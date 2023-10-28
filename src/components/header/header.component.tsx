import Image from "next/image";
import React from "react";
import SearchFormComponent from "../form/search.form";

export default function HeaderComponent() {
    return (
        <div className="p-2 md:w-100 h-[70vh] relative overflow-hidden shadow-2xl container mx-auto mt-5" >
            <div className="bg-image">
                <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698442237/cy7cz9pqniccnsot0yuu.jpg" alt="hero" layout="fill" objectFit="cover" className="rounded-2xl" quality={50} />
            </div>
            <div className="flex items-center justify-center h-full container mx-auto overflow-hidden" >
                <section className="grid grid-col-12 md:grid-cols-12 items-center absolute gap-10 p-3" >
                    <div className="form grid-col-12 md:col-span-6  bg-gray-100 p-5 rounded-lg md:ml-10">
                        <SearchFormComponent />
                    </div>
                    <div className="text md:col-span-6 hidden md:block">
                        <h1 className="text-6xl font-bold text-primary text-center" >
                            Don&apos;t <span className="text-black font-medium italic" >postpone</span> your trip. Book your flight now with <span className="text-secondary font-bold italic" >Kabanda</span>
                        </h1>
                    </div>
                </section>
            </div>
        </div>
    )
}