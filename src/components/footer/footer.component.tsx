import Image from "next/image";
import React from "react";

export default function FooterComponent(){
    return (
        <div className="bg-black text-primary h-28 flex flex-1 items-center justify-center" >
            <div className="content text-center">
                <div className="social flex flex-1 gap-3 mb-5 items-center justify-center">
                    <Image src='/images/icons/facebook.png' width={20} height={20} alt="facebook" />
                    <Image src='/images/icons/instagram.png' width={20} height={20} alt="facebook" />
                </div>
                <div className="text">
                    <p>
                        All rights reserved. @2023 <span className="text-secondary text-sm italic" >karabanda.com</span>
                    </p>
                </div>
            </div>
        </div>
    )
}