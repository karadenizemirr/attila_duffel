"use client"
import InoutComponent from "@/components/form/input";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
export default function RegisterContainer(){
    return (
        <div className="flex flex-1 justify-center items-center mt-10 h-[70vh]" >
            <div className="register-card w-full md:w-1/2 border p-5">
                <div className="title text-center">
                    <h1 className="text-3xl" >
                        Register <span className="text-secondary italic" >Now</span>
                    </h1>
                </div>
                <div className="content">
                    <Formik initialValues={{
                        name: '',
                        surname: '',
                        phone:'',
                        email: ''
                    }} onSubmit={async (values:any, {resetForm}) => {
                        // Submit Register Form

                        const res = await fetch('/api/user/register', {
                            method:'POST',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify(values)
                        })

                        resetForm()

                        const {ok} = await res.json();
                        if(ok){
                            toast.success('Register Success');
                        }else{
                            toast.error('Register Failed');
                        }
                    }} >
                        <Form className="mt-10" >
                            <div className="row flex flex-1 gap-5">
                                <Field name="name" placeholder="Name" component={InoutComponent} />
                                <Field name="surname" placeholder="Surname" component={InoutComponent} />
                            </div>
                            <div className="row flex flex-1 gap-5 mt-5">
                                <Field name="email" placeholder="Email*" component={InoutComponent} />
                                <Field name="phone" placeholder="Phone*" component={InoutComponent} />
                            </div>
                            <div className="row mt-5">
                                <Field name="password" placeholder="Password*" component={InoutComponent} type="password"/>
                            </div>
                            <div className="row mt-5">
                                <button className="w-full bg-secondary p-2 rounded-lg hover:bg-gray-200 duration-200" >
                                    Register Now
                                </button>
                            </div>
                            <div className="row text-center mt-5">
                                <p>
                                    Do you already have an account.<Link href="/login" ><span className="text-blue-300" >Sign in</span></Link>
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}