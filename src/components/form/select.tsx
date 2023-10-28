import React from "react";

export default function SelectComponent({name,placeholder, onchange, field, options, defualt}: {defualt?:string,name?:string, placeholder?:string, onchange?:(value:string) => void, field?:any, options?:any}) {
    
    const [select,setSelect] = React.useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        if (onchange) {
            onchange(e.target.value)
        }
    } 

    return (
        <select 
            name={name} 
            id={name} 
            className="border p-2 w-full rounded-lg" 
            onChange={handleChange}
            defaultValue={defualt}
         >
            <option>
                {placeholder}
            </option>

            {
                options.map((item:any, index:number) => (
                    <option value={item.value} key={index}>
                        {item.name}
                    </option>
                ))
            }
        </select>
    )
}