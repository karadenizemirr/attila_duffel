import React from "react";

export const getALl = async (query: string) => {
    const res = await fetch('/api/duffel/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })

    const data = await res.json()
    return data
}

export default function AirportSelectComponent({placeholder, name, field,onchange}: {placeholder?: string, name?:string, field?: any, onchange?:any}) {
    const [keyword, setKeyword] = React.useState<string>("")
    const [airports, setAirports] = React.useState<any>([])
    const [selectAirport, setSelectAirport] = React.useState<string>("")

    const handleSearch = (query: string) => {
        setAirports([])
        getALl(query).then((res) => {
            setAirports(res)
        })
    }

    const handleSelect = (airport: string) => {
        setSelectAirport(airport)
        setAirports([])
        onchange(airport)
    }

    return (
        <div className="relative w-full" >
            <input
                type="text"
                className="w-full border p-2 rounded-lg"
                name={name}
                id={name}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(e: any) => {
                    setKeyword(e.target.value)
                    handleSearch(e.target.value)
                }} 
                value={selectAirport || keyword}
                {...field}
                />

            {
                airports.length > 0 && (
                    <ul className="w-full border mt-2 rounded-lg p-2 shadow-sm h-96 overflow-scroll absolute bg-white z-10" >
                        {
                            airports.map((airport: any) => (
                                <li className="border-b p-2 cursor-pointer hover:bg-gray-200 duration-200"
                                key={airport.id}
                                onClick={() => handleSelect(airport.iata_code)}
                                >
                                    {airport.name} ({airport.iata_code})
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    )
}