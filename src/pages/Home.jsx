import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchCarousel } from "../redux/carouselSlice";


const Home = () => {
  const carousel=useSelector((state)=>state.crousole.crousole);
  const dispatch=useDispatch();

   useEffect(() => {
    if (!carousel || carousel.length === 0) {
      dispatch(fetchCarousel());
    }
  }, [dispatch]);

  return (
    
      <Layout>
        <Invite />
        <Banner carousel={carousel}/>
        <TrendingProduct />
        <Deal />
        <Trending carousel={carousel}/>
        <Banner_2 carousel={carousel}/>
        <Category />
        <CustomerSay />
        <Blog />
        <Services />
        <About />
      </Layout>
  );
};

export default Home;
