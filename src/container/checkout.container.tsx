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

    return (
        <div className="container mx-auto flex flex-1 justify-center mt-10 mb-10" >
            <div className="checkout-card md:w-1/2 w-full border p-3">
                <div className="title text-center">
                    <h1 className="text-2xl" >
                        Checkout
                    </h1>
                </div>
                <div className="offer">
                    <OfferCardComponent item={state.checkout.offerData} />
                </div>
                <Formik initialValues={{}} onSubmit={(values: any) => {
                    -
                    store.dispatch(actions.setOrderData(values))
                    router.push(`/payment/${state.checkout.paymentIntent.data.id}`)
                }} >
                    <Form className="p-3" >
                        <div className="contact-form border-b mt-5">
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