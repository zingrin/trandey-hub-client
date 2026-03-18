import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from './Features';
import Newsletter from '../components/Newsletter';
import PremiumCollection from '../components/PremiumCollection';
import BestSeller from '../components/BestSeller';
import TrendingProducts from '../components/TrendingProducts';
import PopularProducts from '../components/PopularProducts';



const Home = () => {
    return (
        <div>
           <HeroSection/>
           <PremiumCollection/>
           <BestSeller/>
           <TrendingProducts/>
           <PopularProducts/>
           {/* <TrendyHero/> */}
           {/* <BlogSection/> */}
           <Features/>
           <Newsletter/>
        </div>
    );
};

export default Home;