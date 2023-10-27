"use client"
import { Field, Form, Formik } from "formik";
import React from "react";
import InoutComponent from "../form/input";

export default function QueryTicketComponent() {
    return (
        <div className="container mx-auto mt-32 mb-20" >
            <div className="title text-center">
                <h1 className="text-3xl" >
                    Search My <span className="text-secondary italic" >Ticket</span>
                </h1>
            </div>
            <div className="form mt-10 flex flex-1 items-center justify-center">
                <Formik initialValues={{}} onSubmit={() => { }} >
                    <Form className="w-1/3" >
                        <div className="row flex gap-2">
                            <Field name="offerId" placeholder="Ticket Code" component={InoutComponent} />
                            <button className="p-1.5 border border-black rounded-lg hover:bg-black hover:text-white duration-200" >Search</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}