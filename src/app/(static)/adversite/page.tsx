import React from "react";

export default function AdversitePage() {
    return (
        <div className="min-h-[70vh] w-full mt-20 mb-20" >
            <div className="title text-center mt-10 mb-10">
                <h1 className="text-4xl font-bold" >
                    Advertise with Kabanda
                </h1>
            </div>
            <div className="content grid grid-cols-12 mx-auto container">
                <div className="col-span-6 flex flex-1 justify-center p-5 items-center">
                    <div className="content text-left">
                        <h1 className="text-xl" >
                            Why Advertise with Kabanda?
                        </h1>
                        <ul className="flex flex-1 flex-col items-center gap-6 mt-5 justify-center text-left" >
                            <li>
                                Reach a Global Audience: Kabanda attracts travelers from all over the world. By advertising with us, you can expose your brand to a diverse and international audience.
                            </li>
                            <li>
                                Tailored Advertising Solutions: We offer a range of advertising options to suit your marketing goals, whether it&lsquo;s brand awareness, lead generation, or direct sales.
                            </li>
                            <li>
                                Innovative Technology: Our platform utilizes cutting-edge technology to ensure your ads are seen by the right people at the right time.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-6 flex flex-1 justify-center bg-gray-100 p-5 rounded-lg">
                    <div className="content text-left">
                        <h1 className="text-xl" >
                            Explore the advertising opportunities at Kabanda
                        </h1>
                        <ul className="flex flex-1 flex-col items-center gap-6 mt-5 justify-center text-left" >
                            <li>
                                Display Ads: Prominently showcase your brand through banner and display advertisements on our website. These ads ensure high visibility and brand recognition.
                            </li>
                            <li>
                                Sponsored Content: Publish sponsored articles and content on our blog, reaching our engaged audience with your message.
                            </li>
                            <li>
                                Email Marketing: Leverage our email marketing campaigns to reach our subscribers directly with your offers and promotions. Send your email campaign to advertising@kabanada.org.
                            </li>
                            <li>
                                Social Media Promotion: Connect with our users through our social media channels and promote your brand to our followers.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer text-left mt-10 container mx-auto">
                <h1 className="text-4xl font-bold" >
                    Get in Touch
                </h1>
                <p className="mt-5" >
                    Ready to take your brand to new heights with Kabanda? Contact our advertising team at <span className="text-red-300">advertising@kabanada.org</span> to discuss your advertising goals, budget, and to explore how we can collaborate for mutual success.
                    Join us on our journey to make travel booking a seamless and enjoyable experience for travelers worldwide. Advertise with Kabanda and be a part of our success story!

                </p>
            </div>
        </div>
    )
}