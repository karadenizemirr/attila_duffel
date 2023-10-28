import NavbarComponent from '@/components/navbar/navbar.component'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import StoreProvider from '@/components/provider/store.provider';
import React from "react";
import { ToastContainer } from 'react-toastify';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/provider/session.provider'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className='font-medium font-display-swap' >
        <SessionProvider session={session} >
        <StoreProvider>
          <ToastContainer />
          {/* <ReCAPTCHA 
            sitekey ={process.env.NEXT_PUBLIC_GOOGLE_RECAPTHA_KEY as string}
            onChange={(value) => console.log("Captcha value:", value)}
          /> */}
          <NavbarComponent />
          {children}
        </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
