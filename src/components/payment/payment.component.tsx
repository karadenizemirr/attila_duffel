import { Form, Formik } from "formik";
import React from "react";
import InoutComponent from "../form/input";

export default function PaymentComponent(){
    return (
        <div className="border p-3 rounded-lg" >
            <div className="title">
                <h1 className="text-2xl" >
                    Payment
                </h1>
            </div>
            <div className="paymentForm mt-5">
                <Formik initialValues={{}} onSubmit={() => {}} >
                    <Form>
                        <div className="row">
                            <InoutComponent name="cardNumber" placeholder="Card Number" />
                        </div>
                        <div className="row flex flex-1 gap-3 mt-5">
                            <InoutComponent name="cardHolder" placeholder="Card Holder" />
                            <InoutComponent name="cardExpiry" placeholder="Card Expiry" />
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}