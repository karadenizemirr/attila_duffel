import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatepickerComponent({name, placeholder, onchange}: {name?:string, placeholder?:string, onchange?:any}){
    const [date,setDate] = React.useState();

    const handleChange = (val:any) => {
        setDate(val)
        onchange(date)
    }
    return (
        <div>
            <DatePicker 
                name={name} 
                placeholderText={placeholder}
                selected={date}
                onChange={(val:any) => handleChange(val)}
                withPortal={true}
                highlightDates={[new Date()]}
                className="border border-gray-200 p-2 rounded-lg w-full"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Saat"
                dateFormat="dd/MM/yyyy HH:mm"

                />
        </div>
    )
}