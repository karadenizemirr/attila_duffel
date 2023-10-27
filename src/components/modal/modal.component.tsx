"use client"
import React from "react";

export default function ModalComponent() {

    const [showModal, setShowModal] = React.useState(true);

    setTimeout(() => {
        setShowModal(false)
    }, 5000)


    const handleCloseButton = () => {
        setShowModal(false)
    }

    return (
        showModal && (
            <>
                <div className="modal absolute top-0 w-full md:w-1/3">
                    <div className="modal-card instagramColor text-white h-[30vh] shadow-2xl p-3 rounded-2xl flex flex-1 items-center justify-center animate__animated animate__backInDown">

                        <div className="content text-center">
                            <h1 className="text-3xl font-bold" >
                                Take your place among thousands of followers
                            </h1>
                            <button className="mr-3 bg-black p-3 px-5 rounded-lg hover:bg-gray-200 duration-200 hover:text-black mt-10" >
                                Follow Us
                            </button>
                            <button className="bg-black p-3 px-5 rounded-lg hover:bg-gray-200 duration-200 hover:text-black mt-10" onClick={handleCloseButton} >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    )
}