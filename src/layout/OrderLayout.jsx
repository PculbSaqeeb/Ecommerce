import React from 'react'
import Header from './Header'
import ScrollToTop from '../components/ScrollToTop'
import Footer1 from './Footer1'

const OrderLayout = ({children}) => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <ScrollToTop/>
        <Header/>
        {children}
        <Footer1/>
    </div>
  )
}

export default OrderLayout


// overflow-x-hidden