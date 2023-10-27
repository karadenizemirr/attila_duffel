"use client"
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faTicket } from "@fortawesome/free-solid-svg-icons/faTicket";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function NavbarComponent() {
    const { data: session } = useSession();
    const [isLogin, setIsLogin] = React.useState(false);
    const router = useRouter();

    useEffect(() => {
        if (session) {
            setIsLogin(true);
        }
    }, [session, isLogin, setIsLogin])

    const handleLogout = () => {
        signOut();
        toast.success("Logout success");
        router.push("../");
    }
    return (
        <div className="container mx-auto p-4 grid grid-cols-12 items-center" >
            <div className="col-span-6 sm:col-span-3">
                <Image src="/images/logo.png" width={100} height={100} alt="logo" />
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
                    {
                        isLogin ? (
                            <>
                                <li >
                                    <button onClick={handleLogout} >
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                    </button>
                                </li>
                                <li >
                                    <Link href="/tickets" className="bg-secondary hover:bg-gray-200 p-2 px-6 flex gap-2 items-center duration-200 rounded-lg">
                                        <FontAwesomeIcon icon={faTicket} /> Tickets
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li >
                                    <Link href="/register" >
                                        Register
                                    </Link>
                                </li>
                                <li >
                                    <Link href="/login" className="bg-secondary hover:bg-gray-200 p-2 px-6 flex gap-2 items-center duration-200 rounded-lg">
                                        <FontAwesomeIcon icon={faSignInAlt} width={18} /> SignIn
                                    </Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}