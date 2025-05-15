import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = ({ children }) => {

  return (
    <div className=" flex flex-col overflow-x-hidden min-h-screen">
      <ScrollToTop />
      <div className="flex-grow">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
