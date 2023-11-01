"use client"
import { Formik } from "formik";
import React from "react";
import OneTwoWatContainer from "./container/oneTwoWay.form.container";
import ReturnFormContainer from "./container/return.form.container";

export default function SearchFormComponent() {
    const [onSelect, setOnSelect] = React.useState("oneTwoWay");

    const handleSelect = (val: string) => {
        setOnSelect(val);
    };

    return (
        <div>
            <section className="tab flex flex-1 gap-5 items-center justify-center relative">
                <div className="menu">
                    <ul className="flex flex-1 gap-5 items-center" >
                        <li>
                            <button className={`
                                border 
                                border-gray-200 
                                p-2 rounded-lg 
                                hover:bg-gray-200 
                                duration-200
                                ${onSelect === "oneTwoWay" ? "bg-secondary" : ""}
                                `}
                                onClick={() => handleSelect("oneTwoWay")}
                            >
                                One Way
                            </button>
                        </li>
                        <li>
                            <button className={
                                `
                                border 
                                border-gray-200 
                                p-2 rounded-lg 
                                hover:bg-gray-200 
                                duration-200
                                ${onSelect === "return" ? "bg-secondary" : ""}
                                `
                            }
                                onClick={() => handleSelect("return")}
                            >
                                Return
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="form-container">
                {
                    onSelect === 'oneTwoWay' && (
                        <div>
                            <OneTwoWatContainer />
                        </div>
                    )
                }

                {
                    onSelect === 'return' && (
                        <div>
                            <ReturnFormContainer />
                        </div>
                    )
                }
            </div>
        </div>
    );
}