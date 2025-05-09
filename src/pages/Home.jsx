import React from "react";
import Layout from "../layout/Index";
import Banner from "../components/Banner";
import TrendingProduct from "../components/TrendingProduct";
import Deal from "../components/Deal";
import Trending from "../components/Trending";
import Banner_2 from "../components/Banner_2";
import Category from "../components/Category";
import Blog from "../components/Blog";
import Services from "../components/Services";
import About from "../components/About";
import Invite from "../components/Invite";
import CustomerSay from '../components/CustomerSay';


const Home = () => {
  return (
      <Layout>
        <Invite />
        <Banner />
        <TrendingProduct />
        <Deal />
        <Trending />
        <Banner_2 />
        <Category />
        <CustomerSay />
        <Blog />
        <Services />
        <About />
        
      </Layout>
  );
};

export default Home;
