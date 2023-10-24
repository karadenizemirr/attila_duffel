import React from "react";
import AirportSelectComponent from "../airport.select";
import { Field, Form, Formik } from "formik";
import DatepickerComponent from "../datepicker";
import SelectComponent from "../select";
import InoutComponent from "../input";
import { class_type } from "@/types/base.types";

export default function OneTwoWatContainer() {

    return (
        <div className="mt-5" >
            <Formik initialValues={{
                origin: "",
                destination: "",
                deperature_date: "",

            }} onSubmit={(values: any) => {
                console.log(values)
            }} >
                <Form>
                    <div className="row flex flex-1 gap-3">
                        <Field name="origin" >
                            {({ field, form }: { field: any, form: any }) => (
                                <AirportSelectComponent placeholder="Origin" name="origin"
                                    onchange={(val: string) => {
                                        form.setFieldValue(field.name, val)
                                    }}
                                />
                            )}
                        </Field>
                        <Field name="destination" >
                            {({ field, form }: { field: any, form: any }) => (
                                <AirportSelectComponent placeholder="Destination" name="destination"
                                    onchange={(val: string) => {
                                        form.setFieldValue(field.name, val)
                                    }}
                                />
                            )}
                        </Field>
                    </div>

                    <div className="row mt-5">
                        <Field name="deperature_date" >
                            {({ field, form }: { field: any, form: any }) => (
                                <DatepickerComponent name="deperature_date" placeholder="Deperature Date" onchange={(val: any) => {
                                    form.setFieldValue(field.name, val)
                                }} {...field} />
                            )}
                        </Field>
                    </div>

                    <div className="row mt-5">
                        <Field name="class" >
                            {({ field, form }: { field: any, form: any }) => (
                                <SelectComponent name="class_type" options={class_type} placeholder="Class"
                                    onchange={(val: string) => {
                                        form.setFieldValue(field.name, val)
                                    }}
                                />
                            )}
                        </Field>
                    </div>
                    <div className="row mt-5 flex flex-1 gap-3">
                        <Field name="adult" placeholder="Adult" component={InoutComponent} />
                        <Field name="child" placeholder="Child" component={InoutComponent} />
                    </div>

                    <div className="row mt-5">
                        <button className="bg-secondary p-2 w-full rounded-lg hover:bg-gray-200 duration-200" >
                            Search
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}