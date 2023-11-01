import Image from "next/image";
import React from "react";
import SearchFormComponent from "../form/search.form";

export default function HeaderComponent() {
    return (
        <div className="w-100 h-[70vh] rounded-tr-[300px] rounded-bl-[300px] rounded-xl relative" >
            <div className="bg-image">
                <Image src="/images/hero.jpg" alt="hero" layout="fill" objectFit="cover" className="rounded-tr-[300px] rounded-bl-[300px]" />
            </div>

            <div className="content absolute top-0  w-full">
                <section className="title">
                    <h1>
                        asdasd
                    </h1>
                </section>
                <section className="form w-1/3 bg-white p-5 rounded-lg">
                    <SearchFormComponent />
                </section>
            </div>
        </div>
    )
}