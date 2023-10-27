import React from "react";
import SelectComponent from "../select";
import InoutComponent from "../input";
import { Field } from "formik";

export default function PassengerFormContainer({ index }: { index?: number }) {
    const gender = [
        {
            name: 'Male',
            value: 'm'
        },
        {
            name: 'Female',
            value: 'f'
        }
    ]

    const title = [
        {
            name: 'Mr.',
            value: 'mr'
        },
        {
            name: 'Ms.',
            value: 'ms'
        },
        {
            name: 'Mrs.',
            value: 'mrs'
        },
        {
            name: 'Miss.',
            value: 'miss'
        },
        {
            name: 'Dr.',
            value: 'dr'
        }
    ]
    return (
        <div className="form mt-5">
            <div className="flex flex-1 gap-5" >

                <Field name={`gender${index}`}>
                    {({ field, form }: { field: any, form: any }) => (
                        <SelectComponent name={`gender${index}`} options={gender} placeholder="Gender"
                            onchange={(val: any) => {
                                form.setFieldValue(field.name, val)
                            }}
                            {...field}
                        />
                    )}
                </Field>

                <Field name={`given_name${index}`} placeholder="Given Name" component={InoutComponent} />
                <Field name={`family_name${index}`} placeholder="Family Name" component={InoutComponent} />
            </div>
            <div className="flex flex-1 gap-5 mt-5">
                <Field name={`title${index}`} >
                    {({ field, form }: { field: any, form: any }) => (
                        <SelectComponent name={`title${index}`} options={title} placeholder="Title"
                            onchange={(val: string) => {
                                form.setFieldValue(field.name, val)
                            }}
                            {...field}
                        />
                    )}
                </Field>

                <Field name={`born_on${index}`} placeholder="Date of Birth" type="date" component={InoutComponent} />
            </div>
        </div>

    )
}