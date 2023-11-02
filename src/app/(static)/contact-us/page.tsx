import React from "react";

export default function ContactUs() {
    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center mt-20 mb-20" >
            <div className="title text-left flex flex-col items-center" >
                <h1 className="text-4xl font-bold" >
                    Contact Us
                </h1>
                <p className="mt-5 w-1/3" >
                    At Kabanda, we&lsquo;re here to assist you with any questions, concerns, or feedback you may have. Feel free to reach out to us using the following contact methods
                </p>
            </div>
            <div className="contactCard mt-10 w-1/2">
                <ul className="grid grid-cols-12 gap-5" >
                    <li className="bg-gray-300 p-3 rounded-lg flex flex-col gap-3 col-span-4 items-center justify-center" >
                        <span className="text-sm italic" >
                        Customer Support
                        </span>
                        <span>
                            support@kabanada.org
                        </span>
                    </li>
                    <li className="bg-gray-300 p-3 rounded-lg flex flex-col gap-3 col-span-4 items-center justify-center" >
                        <span className="text-sm italic" >
                        General Inquiries
                        </span>
                        <span>
                             info@kabanada.org
                        </span>
                    </li>
                    <li className="bg-gray-300 p-3 rounded-lg flex flex-col gap-3 col-span-4 items-center justify-center" >
                        <span className="text-sm italic" >
                        General Inquiries
                        </span>
                        <span>
                             info@kabanada.org
                        </span>
                    </li>
                    <li className="bg-gray-300 p-3 rounded-lg flex flex-col gap-3 col-span-4 items-center justify-center" >
                        <span className="text-sm italic" >
                        Business Partnerships
                        </span>
                        <span>
                             info@kabanada.org
                        </span>
                    </li>
                    <li className="bg-gray-300 p-3 rounded-lg flex flex-col gap-3 col-span-4 items-center justify-center" >
                        <span className="text-sm italic" >
                        Media Inquiries
                        </span>
                        <span>
                        media@kabanada.org
                        </span>
                    </li>
                    <li className="p-3 rounded-lg flex flex-col gap-3 col-span-4 items-center justify-center bg-tertiary text-white" >
                    <span className="text-sm italic" >
                        Address
                        </span>
                        <span className="text-sm text-left" >
                        Headquarters 123 Skyway Street Cityville, CA 12345 UA
                        </span>
                    </li>
                </ul>
            </div>
            <div className="footer mt-10 w-1/3">
                Feedback and Suggestions We value your feedback and suggestions. If you have any ideas or comments to help us improve our service, please email us at <span className="text-red-300" >feedback@kabanada.org.</span>
            </div>
            <div className="assets mt-10">    
                <ul>
                    <li>
                        <span className="font-bold" >Monday to Friday:</span> 9:00 AM - 6:00 PM (GMT-5)
                    </li>
                    <li>
                        <span className="font-bold" >Saturday:</span> 10:00 AM - 4:00 PM (GMT-5)
                    </li>
                    <li>
                        <span className="font-bold" >Sunday:</span> Closed
                    </li>
                </ul>
            </div>
        </div>
    )
}