"use client"
import PassengerFormContainer from "@/components/form/container/passenger.form.container";
import InoutComponent from "@/components/form/input";
import OfferCardComponent from "@/components/offerCard/offerCard.component";
import { store } from "@/redux";
import { actions } from "@/redux/store/checkout.state";
import { Field, Form, Formik } from "formik";
import { redirect, useRouter } from "next/navigation";
import React from "react";


export default function CheckoutContainer() {
    const state: any = store.getState()
    const router = useRouter();
    const offerData = state.checkout.offerData

    return (
        <div className="container mx-auto flex flex-1 justify-center items-center mt-10 mb-10" >
            <div className="checkout-card md:w-1/2 w-full border p-3 checkout-gradient shadow-md rounded-lg">
                <div className="title text-center">
                    <h1 className="text-2xl" >
                        Checkout
                    </h1>
                </div>
                <div className="offer flex justify-center">
                    <OfferCardComponent item={state.checkout.offerData} />
                </div>
                <Formik initialValues={{}} onSubmit={(values: any) => {
                        store.dispatch(actions.setOrderData(values))
                        router.push(`/payment/${state.checkout.paymentIntent.data.id}`)
                }} >
                    <Form className="p-3 " >
                        <div className="contact-form border-b mt-5 ">
                            <div className="title">
                                <h2 className="text-xl" >
                                    Contact
                                </h2>
                            </div>
                            <div className="form mt-3 mb-5">
                                <div className="row flex flex-1 gap-5">

                                    <Field name="email" placeholder="Email" component={InoutComponent} />
                                    <Field name="phone" placeholder="Phone" component={InoutComponent} />
                                </div>
                            </div>
                        </div>
                        <div className="passenger-form border-b mt-5">
                            <div className="title">
                                <h2 className="text-xl">
                                    Passenger
                                </h2>
                            </div>
                            <div className="passenger-form mt-5 mb-5">
                                {
                                    state.checkout.offerData.passengers.map((item: any, index: number) => (
                                        <div className="mt-5 mb-5" key={index}>
                                            <span className="text-sm bg-gray-200 p-1 px-2 rounded-lg" >
                                                Passenger: {index + 1}
                                            </span>
                                            <PassengerFormContainer key={index} index={index} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="billingDetail mt-10">
                            <h2 className="text-xl mb-5" >
                                Billing Details
                            </h2>
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-gray-500 text-center ">
                                    <thead className="text-xs text-gray-700 uppercase ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Currency
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Base Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Tax Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Fee Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Total Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b text-center  ">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {offerData.base_currency}
                                            </th>
                                            <td className="px-6 py-4">
                                                {offerData.base_amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                {offerData.tax_amount}
                                            </td>
                                            <td className="px-6 py-4">
                                                2.9%
                                            </td>
                                            <td className="font-bold italic" >
                                                {
                                                    ((offerData.total_amount + 10) / (1 - 0.029)).toFixed(2)
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="save-button">
                            <button
                                // href= {`/payment/${state.checkout.paymentIntent.data.id}`}
                                className="bg-secondary p-2 rounded-lg w-full disabled:bg-gray-200 text-center hover:bg-gray-200 duration-200"
                                type="submit"
                            >
                                Save and Payment
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}