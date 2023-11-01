import React from "react";

export default function InoutComponent({name,placeholder, field, type='text'}: {type?:string, name?:string, placeholder?:string, field?:any}){
    return (
        <input 
            type={type} 
            className="w-full border p-2 rounded-lg"
            name={name}
            placeholder={placeholder}
            {...field}
            autoComplete="off"
            />
    )
}