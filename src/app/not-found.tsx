import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound(){
    return (
        <div className="w-100 h-[70vh] flex items-center justify-center" >
            <div className="content text-center">
                <h1 className="text-4xl mb-10" >
                The page you are looking <span className="text-secondary italic" >for cannot be reached.</span>
                </h1>
                <Link href="/" className=" bg-black text-white p-2 rounded-lg hover:bg-gray-200 duration-200" >
                   <FontAwesomeIcon icon={faHomeAlt} /> Get Home
                </Link>
            </div>
        </div>
    )
}