import { dateParser } from "@/lib/parser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function OfferCardComponent({ item, children }: { item: any, children?:React.ReactNode }) {
    const departing_date = item.slices[0].segments[0].departing_at
    const arriving_date = item.slices[0].segments[0].arriving_at

    const parseDepartingDate: any = dateParser(departing_date)
    const parseArrivingDate: any = dateParser(arriving_date)

    // Return Date
    const return_departing_date = item?.slices[1]?.segments[0].departing_at ||''
    const return_arriving_date = item?.slices[1]?.segments[0].arriving_at||''
    
    const return_parseDepartingDate: any = dateParser(return_departing_date)||''
    const return_parseArrivingDate: any = dateParser(return_arriving_date)||''

    return (
        <div className="w-full md:w-4/5 p-3" >
            <div className="result-card border border-silver p-3 rounded-xl shadow-sm relative ">
                <div className="row flex flex-1 items-center justify-between">
                    <div className="info flex flex-1 gap-3 items-center">
                        <Image src={item.owner.logo_symbol_url} width={50} height={50} alt="logo" />
                        <div className="time flex flex-col gap-1 items-center">
                            <span >
                                {parseDepartingDate?.time}-{parseArrivingDate?.time}
                            </span>
                            <span className="text-sm" >
                                {parseDepartingDate?.date}-{parseArrivingDate.date}
                            </span>
                        </div>

                    </div>
                    <div className="where-to">
                        <div className="time">
                            <p>
                                {item.slices[0].duration.replace('PT', '').toLowerCase()}
                            </p>
                        </div>
                        <div className="location">
                            <p className="text-sm" >
                                {item.slices[0].origin.iata_code} - {item.slices[0].destination.iata_code}
                            </p>
                        </div>
                    </div>
                </div>
                {
                    item.slices[1] && (
                        <div className="mt-10 border-t p-2 border-b bg-gray-100" >
                            <div className="row flex flex-1 items-center justify-between">
                                <div className="info flex flex-1 gap-3 items-center">
                                    <div className="time flex flex-col gap-1 items-center">
                                        <span >
                                            {return_parseDepartingDate?.time} - {return_parseArrivingDate?.time}
                                        </span>
                                        <span className="text-sm" >
                                            {return_parseDepartingDate?.date}-{return_parseArrivingDate?.date}
                                        </span>
                                    </div>

                                </div>
                                <div className="where-to">
                                    <div className="time">
                                        <p>
                                            {item.slices[1].duration.replace('PT', '').toLowerCase()}
                                        </p>
                                    </div>
                                    <div className="location">
                                        <p className="text-sm" >
                                            {item.slices[1].origin.iata_code} - {item.slices[1].destination.iata_code}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="detail-card mt-5">
                    <div className="topbar flex flex-1 justify-between">
                        <span className="text-sm font-italic" >
                            {item.owner.name}
                        </span>
                        <span className="font-bold">
                            {item.base_amount}-<span className="font-bold italic" >{item.base_currency}</span>
                        </span>
                    </div>
                </div>
                <div className="row footer border-t border-silver mt-10 py-6">
                    <div className="flex flex-1 justify-between items-center">
                        <div className="price">
                            <h1 className="text-xl text-black font-bold" >
                                {item.base_amount}-<span className="font-bold italic" >{item.base_currency}</span>
                            </h1>
                        </div>
                        <div className="class">
                            <span className="font-italic text-sm rounded-full bg-gray-200 p-1" >
                                {item.slices[0].segments[0].passengers[0].cabin_class_marketing_name}
                            </span>
                        </div>
                        {/* <div className="detail">
                            <Link href={`/offers/detail/` + item.id} className="bg-secondary p-2 rounded-lg hover:bg-gray-200 duration-200" onClick={handleSelectOffer} >
                                Select
                            </Link>
                        </div> */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}