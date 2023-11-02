import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatepickerComponent({name, placeholder, onchange}: {name?:string, placeholder?:string, onchange?:any}){
    const [date,setDate] = React.useState();

    const handleChange = (val:any) => {
        onchange(val)
        setDate(val);
    }
    return (
        <div>
            <DatePicker
              name={name}
              showIcon
              icon={
                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400" />
              }
              placeholderText={placeholder}
              selected={date}
              onChange={(val: any) => handleChange(val)}
              withPortal={true}
              highlightDates={[new Date()]}
              className="border border-gray-200 p-2 rounded-lg w-full"
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
            />
        </div>
    )
}