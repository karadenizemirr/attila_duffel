import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterComponent() {
    return (
         <div className="bg-[#030c91] text-primary h-auto flex flex-1 flex-col items-center justify-center py-10" >
            <div className="menuContainer grid md:grid-cols-12 gap-20 items-center">
                <div className="col-span-6 mx-auto">
                    <h2 className="text-2xl mb-5" >
                        Company
                    </h2>
                    <ul className="flex flex-col gap-3" >
                        <li>
                            <Link href="/about">
                                About Kabanda
                            </Link>
                        </li>
                        <li>
                            <Link href="/press">
                            Press
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-6 mx-auto">
                    <h2 className="text-2xl mb-5" >
                        Resources
                    </h2>
                    <ul className="flex flex-col gap-3" >
                        <li>
                            <Link href="/afilliates" >
                            Afilliates
                            </Link>
                        </li>
                        <li>
                            <Link href="/adversite">
                                Adversite
                            </Link>
                        </li>
                        <li>
                            <Link href="/data-privacy-policy">
                                Data Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/data-privacy-policy" >
                                Terms
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bottomMenu mt-10 p-1 w-full container mx-auto border-t px-3 md:px-0">
                <div className="flex flex-1 justify-between mt-5 items-center">
                    <div className="col-span-6">
                        © 2023 <span className="text-secondary" >karabanda.org</span>
                    </div>
                    <div className="payment flex gap-3">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413633/smmox3wvfb5srks5kdlf.svg" width={110} height={50} alt="stripe" />
                        <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413634/tz5o1opcjn6kvik7vkfl.svg" width={90} height={50} alt="stripe" />
                        <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698413631/brvkoxsme9eyyzkg5s2d.svg" width={60} height={50} alt="stripe" />
                    </div>
                </div>
            </div>
        </div>
    )
}