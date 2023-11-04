"use client"
import OfferCardComponent from "@/components/offerCard/offerCard.component";
import SiderbarComponent from "@/components/siderbar/siderbar.component";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { start } from "repl";

export default function OffersContainer({ data }: { data?: any }) {
    const [spinner, setSpinner] = useState<number>();

    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const [startPrice, setStartPrice] = useState("")
    const [endPrice, setEndPrice] = useState("")

    useEffect(() => {
        if (spinner && spinner >= 0) {
            toast.success("Offer selected", {
                autoClose: 300
            })
        }

        if (searchInput) {
            const filteredData = data.filter((item: any) =>
                JSON.stringify(item).toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredData(filteredData);
        } else {
            setFilteredData(data);
        }

        if (startPrice && endPrice){
            const filteredPrice = data.filter((item:any) => {
                const base_amount = parseFloat(item.base_amount)
                const start_price = parseFloat(startPrice)
                const end_price = parseFloat(endPrice)
                return base_amount > start_price && base_amount < end_price;
                
            })

            if (filteredPrice) setFilteredData(filteredPrice)
            else setFilteredData(data)
        }
    }, [spinner, data, searchInput, startPrice, endPrice])


    const owners = data.reduce((acc: any, item: any) => {
        const list: Set<string> = new Set(acc);

        list.add(item.owner.name);

        return Array.from(list);
    }, []);


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleSearchHours = (event: React.ChangeEvent<HTMLInputElement>) => {
        const hours: string = event.target.value

        const filteredHours = data.filter((item:any) => {
            const search = item.slices[0].segments[0].departing_at.includes(hours)
            return search
        })

        if (filteredHours) setFilteredData(filteredHours)
        else filteredData(data)
    }

    const handleSetStartPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartPrice(event.target.value)
    }

    const handleSetEndPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndPrice(event.target.value)
    }

    return (
        <div className="container mx-auto" >
            <div className="title text-center mt-10">
                <h1 className="text-4xl font-bold border-b rounded-full p-2" >
                    Results
                </h1>
            </div>
            <div className="content grid grid-cols-12 mt-10 mb-10 relative">
                <div className="sidebar col-span-3 border w-full p-4 rounded-lg mt-10">
                    <div className="filters mt-10 mb-10 border p-3 rounded-lg shadow-sm grid grid-cols-12">
                        <div className="search col-span-12">
                            <h1 className="text-center mt-2 mb-2">
                                Dynamic Search
                            </h1>
                            <input
                                type="text"
                                className="form-element w-full p-2 rounded-lg text-sm"
                                placeholder="Search Keyword"
                                value={searchInput}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className="title">
                        <h1 className="text-center mt-2 mb-2" >
                            Brand Name
                        </h1>
                        <select name="" id="" className="form-element" onChange={(e: any) => {
                            setSearchInput(e.target.value)
                        }}>
                            {
                                owners.map((item: any, index: number) => (
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="price">
                        <h1 className="text-center mt-2 mb-2">
                            Price
                        </h1>
                        <div className="row flex flex-1 gap-3">
                            <input type="text" placeholder="Start Price" className="form-element" onChange={handleSetStartPrice} />
                            <input type="text" placeholder="End Price" className="form-element" onChange={handleSetEndPrice} />
                        </div>
                    </div>
                    <div className="time">
                        <h1 className="text-center mt-2 mb-2">
                            Hours
                        </h1>
                        <div className="row flex flex-1 gap-3">
                            <input type="text" placeholder="Hours" className="form-element" onChange={handleSearchHours} />
                        </div>
                    </div>
                </div>
                <div className="cardContainer  col-span-9">
                    <div className="mt-10 text-center flex flex-col items-center justify-center">
                        {
                            filteredData?.map((item: any, index: number) => (
                                <OfferCardComponent key={index} item={item}>
                                    <div className="detail">
                                        <Link href={`/offers/detail/` + item.id} className="bg-secondary p-2 rounded-lg hover:bg-gray-200 duration-200" onClick={() => setSpinner(index)}>
                                            {spinner === index ? (

                                                <span>
                                                    Loading...
                                                </span>
                                            ) : (
                                                "Select"
                                            )}
                                        </Link>
                                    </div>
                                </OfferCardComponent>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}