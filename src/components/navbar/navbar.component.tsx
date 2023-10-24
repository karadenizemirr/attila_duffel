import { faCashRegister, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function NavbarComponent() {
    return (
        <div className="container mx-auto p-4 grid grid-cols-12 items-center" >
            <div className="col-span-6 sm:col-span-3">
                <h1 className="text-2xl font-bold" >
                    Logo
                </h1>
            </div>
            <div className="col-span-6 hidden sm:flex flex-1 justify-center items-center">
                <ul className="flex flex-1 justify-center items-center gap-10" >
                    <li>
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <ul className="flex flex-1 items-center gap-5 justify-end" >
                    <li >
                        <Link href="/register" >
                            Register
                        </Link>
                    </li>
                    <li >
                        <button className="bg-secondary p-2 px-6 flex gap-2 items-center hover:bg-gray-300 duration-200">
                            <FontAwesomeIcon icon={faSignInAlt} width={18} /> SignIn
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}