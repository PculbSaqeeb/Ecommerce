import React, { Children } from 'react'
import Header from './Header'
import Footer_1 from './Footer_1'
import ScrollToTop from '../components/ScrollToTop'

const OrderLayout = ({children}) => {
  return (
    <div>
      <ScrollToTop/>
        <Header/>
        {children}
        <Footer_1/>
    </div>
  )
}

export default OrderLayout