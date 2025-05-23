import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = ({ children }) => {

  return (
    <div className="w-full overflow-x-hidden flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>

  );
};

export default Layout;
