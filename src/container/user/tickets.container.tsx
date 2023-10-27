import React from "react";

export default function TicketsContainer({ orders }: { orders?: any }) {
    return (
        <div className="container mx-auto mt-10" >
            <div className="title text-center">
                <h1 className="text-3xl" >
                    <span className="text-secondary" >My</span> Tickets
                </h1>
            </div>
            <div className="content mt-10">

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Origin
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Destination
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((item: any, index: number) => (
                                    <tr className="bg-white border-b" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {item.date}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.where}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.from}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.price}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}