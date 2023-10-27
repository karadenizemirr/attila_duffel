import React from "react";

export default function AdvertComponent(){
    return (
        <div className="container mx-auto custom-gradient mt-32 mb-20 w-full h-32 rotate-6 overflow-hidden rounded-tr-[150px] rounded-br-[150px] flex flex-1 items-center justify-center rotate-" >
            <div className="content text-center">
                <h1 className="font-bold text-4xl" >
                    Now Buy Ticket
                </h1>
                <button className="bg-black text-white p-3 mt-3 rounded-lg hover:bg-gray-200 duration-200" > 
                    Get Ticket
                </button>
            </div>
        </div>
    )
}