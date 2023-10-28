import Image from "next/image";
import React from "react";

export default function FooterComponent() {
    return (
         <div className="bg-black text-primary h-auto flex flex-1 flex-col items-center justify-center py-10" >
            <div className="menuContainer grid md:grid-cols-12 gap-20 items-center">
                <div className="col-span-4 mx-auto">
                    <h2 className="text-2xl mb-5" >
                        Company
                    </h2>
                    <ul className="flex flex-col gap-3" >
                        <li>
                            About Kabanda
                        </li>
                        <li>
                            Press
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 mx-auto">
                    <h2 className="text-2xl mb-5" >
                        Learn More
                    </h2>
                    <ul className="flex flex-col gap-3" >
                        <li>
                            Book On Karabanda
                        </li>
                        <li>
                            Affilliates
                        </li>
                        <li>
                            Advertise
                        </li>
                        <li>
                            Hotellers
                        </li>
                        <li>
                            Data Privacy Policy
                        </li>
                        <li>
                            Terms
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 mx-auto">
                    <h2 className="text-2xl mb-5" >
                        Explore
                    </h2>
                    <ul className="flex flex-col gap-3" >
                        <li>
                            Airport Directory
                        </li>
                        <li>
                            Airlines Directory
                        </li>
                        <li>
                            Flight Schedules
                        </li>
                        <li>
                            Hotel Chanins
                        </li>
                    </ul>
                </div>

            </div>

            <div className="bottomMenu mt-10 p-1 w-full container mx-auto border-t px-3 md:px-0">
                <div className="flex flex-1 justify-between mt-5">
                    <div className="col-span-6">
                        © 2023 <span className="text-secondary" >karabanda.org</span>
                    </div>
                    <div className="social flex gap-3">
                        <Image src='https://res.cloudinary.com/dssep9ze1/image/upload/v1698413630/ykyvuuw91zza3ycvauoq.png' width={20} height={10} objectFit="center" alt="facebook" />
                        <Image src='https://res.cloudinary.com/dssep9ze1/image/upload/v1698413631/vpgomrsuspxe6gv36nhm.png' width={20} height={10} alt="facebook" />
                    </div>
                </div>
            </div>
        </div>
    )
}