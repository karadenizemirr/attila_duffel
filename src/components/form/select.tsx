import React from "react";

export default function SelectComponent({name,placeholder, onchange, field, options}: {name?:string, placeholder?:string, onchange?:any, field?:any, options?:any}) {
    
    const [select,setSelect] = React.useState("");

    const handleChange = (val:any) => {
        setSelect(val)
        onchange(select)
    } 

    return (
        <select 
            name={name} 
            id={name} 
            className="border p-2 w-full rounded-lg" 
            onChange={(e) => handleChange(e.target.value)}
         >
            <option value="" >
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