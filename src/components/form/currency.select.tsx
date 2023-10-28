import { currencyList } from "@/types/currency.types";
import React from "react";

export default function CurrencySelectComponent({onchange}:{onchange?:(value:string) => void}) {

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        if (onchange){
            onchange(e.target.value)
        }
    }
    return (
        <select 
            name="currency" 
            id="currency" 
            className="border p-2 w-full rounded-lg" 
            defaultValue="USD"
            onChange={handleChange}
            >
            {
                Object.keys(currencyList).map((key: any, index: number) => (
                    <option value={key} key={index}>{key}</option>
                ))
            }
        </select>
    )
}