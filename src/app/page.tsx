import AdvertComponent from '@/components/advert/advert.component'
import BrandComponent from '@/components/brand/brand.component'
import HeaderComponent from '@/components/header/header.component'
import ModalComponent from '@/components/modal/modal.component'
import React, { useEffect } from 'react'

import { Metadata } from "next";
import HeroComponent from '@/components/hero/hero.component'
import FooterComponent from '@/components/footer/footer.component'
import QueryTicketComponent from '@/components/query-ticket/queryTicket.component'
export const metadata:Metadata = {
    title: 'Home - KABANDA',
    description: 'Register'
}

export default function Home() {  
  return (
    <div className="relative">
      <HeaderComponent />
      <BrandComponent />
      <AdvertComponent />
      <QueryTicketComponent />
    </div>
  )
}
