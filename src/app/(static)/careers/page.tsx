import Image from "next/image";
import React from "react";

export default function CareersPage() {
    return (
        <div className="mt-10 mb-20">
            <div className="h-[70vh] w-full flex items-center justify-center relative" >
                <div className="bg">
                    <Image src="https://res.cloudinary.com/dssep9ze1/image/upload/v1698849241/xibgzah3fndkvvnxxtg8.jpg" layout="fill" objectFit="cover" alt="careers"/>
                </div>
                <h1 className="text-6xl font-bold w-1/3 z-50 text-white" >
                    Careers at <span className="text-secondary" >Kabanda</span>
                </h1>
            </div>
            <div className="content mx-auto container px-52 mt-20">
                <div className="title text-center">
                    <h1 className="text-3xl font-bold" >
                        Careers at Kabanda
                    </h1>
                    <p className="mt-3" >
                        At Kabanda, we&lsquo;re on a mission to make air travel simpler and more accessible for everyone. If you&lsquo;re passionate about travel, technology, and innovation, we want to hear from you. Join us in redefining the future of flight booking.
                    </p>
                </div>
                <div className="content text-center mt-10 mb-10">
                    <h2 className="text-2xl font-bold" >
                        <span className="text-4xl" >W</span>hy Kabanda ?
                    </h2>

                    <ul className="mt-10">
                        <li>
                            <p>
                                <span className="font-bold">Innovation</span> We&lsquo;re at the forefront of the travel industry, developing cutting-edge technology solutions to streamline the flight booking process and enhance the customer experience.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="font-bold" >
                                    Growth:
                                </span>Be a part of a fast-growing startup where your contributions will have a direct impact on our success. Your career can soar as high as our planes!
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="font-bold" >Collaboration:</span> Work with a dynamic team of individuals who are driven by a common goal - to revolutionize the travel industry.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="font-bold">
                                    Diversity:

                                </span>At Kabanda, we embrace diversity and inclusion. We value different perspectives and backgrounds, which make us a stronger and more innovative team.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="content text-center mt-10 mb-10">
                    <h2 className="text-2xl font-bold mb-10" >
                        Available Position
                    </h2>
                    <ul>
                        <li>
                            <p>
                                <span className="font-bold" >Software Engineer</span>  Help build the backbone of our flight booking platform. Contribute to the development of innovative features and improve our user experience.
                            </p>
                        </li>
                        <li>
                            <span className="font-bold" >Customer Support Specialist:</span> Assist travelers with their bookings and provide top-notch customer service.
                        </li>
                        <li>
                            <span>
                                <span className="font-bold" >
                                    Marketing Guru:
                                </span>
                            </span>
                            Join our marketing team to help spread the word about Kabanda and its unique offerings.
                        </li>
                        <li>
                            <span className="font-bold" >
                                Data Scientist:
                            </span>
                            Analyze data to discover insights and trends in the travel industry, improving our services and providing a better experience for our users.
                        </li>
                        <li>
                            <span className="font-bold" >
                                Sales Representative:
                            </span>
                            Drive growth by building and maintaining relationships with partners and clients.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="build w-full bg-tertiary text-white p-10 flex items-center justify-center">
                <h1 className="text-4xl font-bold" >
                    How To Apply
                </h1>
            </div>
            <div className="applyContent mx-auto container px-52 mt-10 text-center">
                <p>
                    Ready to embark on a journey with us? Send your resume and a cover letter to careers@kabanda.org with the subject line &lsquo;Kabanda Career Application - [Your Desired Position].&lsquo;
                    We can&lsquo;t wait to hear from you and potentially welcome you aboard the Kabanda team. Your career in the travel industry starts here!
                </p>
            </div>
        </div>
    )
}