"use client"
import { store } from "@/redux";
import { fetchIsCancel } from "@/redux/store/operations.state";
import Image from "next/image";
import { useEffect } from "react";
import { toast } from "react-toastify";
import html2pdf from 'html2pdf.js'

export default function OrderDetailContainer({order}: {order: any }) {
    const handleIsCancel = () => {
        store.dispatch(fetchIsCancel(order.id))
    }

    const isCancel = store.getState().operation.isCancel

    useEffect(() => {
        if (isCancel){
            toast.success('Ticket canceled')
        }
    }, [isCancel])

    
    const handleDownloadPDF = () => {
        const element = document.getElementById('orderDetailContainer')
        html2pdf()
            .from(element)
            .save('orderPass.pdf')
    }

    return (
        <div className="orderDetailContainer flex flex-1 justify-center mt-10" id="orderDetailContainer">
            <div className="col w-2/3 bg-gray-100 p-4 rounded-lg">
                <div className="topbar flex flex-1 justify-between">
                    <h1 className="text-2xl uppercase" >
                        {order.booking_reference}
                    </h1>
                    <div className="menu">
                        {/* <button className="bg-red-500 text-white p-2 rounded-lg text-sm  mr-2" onClick={handleIsCancel} >
                            Cancel Ticket
                        </button> */}
                        <button className="bg-black text-white p-2 rounded-lg text-sm" onClick={handleDownloadPDF} >
                            Download Ticket
                        </button>

                    </div>
                </div>
                <div className="journeyDetail mt-5">
                    <h2 className="text-xl" >
                        Journey Details
                    </h2>

                    <div className="content mt-2 flex flex-1  items-center">
                        <div className="info flex flex-1 items-center gap-4">
                            <Image src={order.owner.logo_symbol_url} width={70} height={70} alt="brand" />
                            <div className="timer flex flex-col">
                                <div className="airlies">
                                    <span className="text-sm italic text-gray-400" >
                                        {order.owner.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-end" >
                            <span className="font-bold" >
                                {order.slices[0].duration}
                            </span>
                            <span className="text-sm text-gray-400 italic">
                                {order.slices[0].origin.iata_code} - {order.slices[0].destination.iata_code}
                            </span>
                        </div>
                    </div>

                    <div className="slices">
                        {
                            order.slices.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col items-center mt-2 gap-4" >
                                    <span>
                                         Origin: <span className="text-sm text-gray-400 italic" >{item.origin.name} - {item.segments[index].arrival_datetime}</span>
                                    </span>
                                    <span>
                                        Destination: <span className="text-sm text-gray-400 italic" >{item.destination.name} - {item.segments[index].departure_datetime}</span>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="passengers mt-10">
                        <h2 className="text-xl mb-5" >
                            Passenger Details
                        </h2>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left ">
                                <thead className="text-xs text-gray-700 uppercase ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Birth of date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Gender
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order.passengers.map((item: any, index: number) => (

                                            <tr className="bg-white border-b" key={index}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap uppercase ">
                                                    {item.title}&nbsp;{item.given_name}&nbsp;{item.family_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item.born_on}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.gender === 'f' ? 'Famale' : 'Male'}
                                                </td>
                                                <td>
                                                    {item.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.phone_number}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="billingDetail mt-10">
                        <h2 className="text-xl mb-5" >
                            Billing Details
                        </h2>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 ">
                            <table className="w-full text-sm text-gray-500 text-center ">
                                    <thead className="text-xs text-gray-700 uppercase ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Currency
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Base Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tax Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Fee Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Payment Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b text-center  ">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {order.base_currency}
                                            </th>
                                            <td className="px-6 py-4">
                                                {order.base_amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                {order.tax_amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                2.9%
                                            </td>
                                            <td className="font-bold italic" >
                                                {
                                                    ((order.total_amount + 10) / (1 - 0.029)).toFixed(2)
                                                }
                                            </td>
                                            <td className="px-6 py-4">
                                                {
                                                    !order.payment_status.awaiting_payment ? "Confirmed" : "Awaiting Payment"
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


