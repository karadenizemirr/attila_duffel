"use client"
import React from "react";
import InoutComponent from "@/components/form/input";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
export default function LoginContainer(){

    const {data:session} = useSession();
    console.log(session)
    
    
    return (
        <div className="flex flex-1 justify-center items-center mt-10 h-[70vh]" >
            <div className="register-card w-1/2 border p-5">
                <div className="title text-center">
                    <h1 className="text-3xl" >
                        Login <span className="text-secondary italic" >Now</span>
                    </h1>
                </div>
                <div className="content">
                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }} onSubmit={async (values) => {
                        await signIn('credentials', {
                            email: values.email,
                            password: values.password,
                            callbackUrl:'/'
                        })
                    }} >
                        <Form className="mt-10" >
                            <div className="row flex flex-1 gap-5">
                                <Field name="email" placeholder="Email" component={InoutComponent} />
                                <Field name="password" placeholder="Password" component={InoutComponent} type="password" />
                            </div>
                            <div className="row mt-5">
                                <button className="w-full bg-secondary p-2 rounded-lg hover:bg-gray-200 duration-200" >
                                    Login Now
                                </button>
                            </div>
                            <div className="row text-center mt-5">
                                <p>
                                    You don&apos;t have an account yet.<Link href="/register" ><span className="text-blue-300" >Register Now</span></Link>
                                </p>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}