import React from "react"
import { allCurrency } from "@/types/base.types"

export default function CurrencySelectComponent({ onchange }: { onchange?: (value: string) => void }) {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onchange) {
            onchange(e.target.value)
        }
    }
    return (
        <select name="currency" id="" className="w-full border p-2 rounded-lg" onChange={handleChange} defaultValue="USD">
            {
                Object.keys(allCurrency).map((item: any, index: number) => (
                    <option value={allCurrency[item]?.code}>
                        {
                            `${allCurrency[item]?.name}-${allCurrency[item]?.code} - (${allCurrency[item]?.symbol})`
                        }
                    </option>
                ))
            }
        </select>
    )
}