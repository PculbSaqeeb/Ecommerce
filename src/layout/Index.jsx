import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = ({ children }) => {
  
  return (
    <div>
      <ScrollToTop/>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
