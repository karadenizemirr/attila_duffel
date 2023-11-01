import React from "react";

export default function AffiliatesPage() {
    return (
        <div className="w-full min-h-[80vh] flex flex-1 justify-center items-center mt-10">
            <div className="title flex flex-1 flex-col justify-center items-center">
                <h1 className="text-6xl font-bold" >
                    Afilliates
                </h1>
                <p className="w-1/2 mt-5 text-center" >
                    At Kabanda, we believe in building strong partnerships to provide our customers with the best flight booking experience. If you&apos;re interested in becoming an affiliate with us, here&lsquo;s how you can get involved and benefit from our program:
                </p>
                <div className="content w-1/2 mt-10 text-center">
                    <ul className="flex flex-1 flex-col gap-3" >
                        <li>
                            Earn Commission: Join our affiliate program to earn competitive commissions for every successful booking made through your referral. It&lsquo;s a great way to monetize your website or online presence.
                        </li>
                        <li>
                            User-Friendly Integration: We offer easy-to-implement integration options for your website or platform, allowing you to seamlessly link your users to Kabanda for flight bookings.
                        </li>
                        <li>
                            Real-Time Tracking: Get access to real-time tracking and reporting tools to monitor the performance of your referrals, ensuring you can optimize your strategies for better results.
                        </li>
                        <li>
                            Dedicated Support: Our team of affiliate managers is here to assist you. Reach out to us at <span className="text-red-300" >affiliates@kabanda.org</span> with any questions or concerns.
                        </li>
                        <li>
                            Customized Solutions: We understand that every affiliate is unique. We work with you to create customized solutions that align with your audience and objectives.
                        </li>
                        <li>
                            Promotional Materials: Gain access to a library of promotional materials, including banners, widgets, and marketing assets to enhance your affiliate efforts.
                        </li>
                        <li>
                            Transparent Payments: We ensure transparent and timely commission payments to our affiliates, helping you maximize your earnings.
                        </li>
                        <li>
                            Global Reach: Our flight booking platform serves customers worldwide, offering a vast market for you to tap into.
                        </li>

                    </ul>
                </div>
                <div className="footer w-1/2 text-center mt-10 mb-10 text-gray-400 italic">
                    <p>
                        Join the Kabanda affiliate program and become a part of our growing network. Start earning commissions and providing your audience with a reliable flight booking solution. Contact us at affiliates@kabanda.org to get started. We look forward to partnering with you!
                    </p>
                </div>
            </div>
        </div>
    )
}
