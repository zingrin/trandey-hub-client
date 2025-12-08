import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsPage from '../components/ProductsPage';
import CollectionSection from '../components/CollectSection';
import TrendyHero from '../components/TrendyHero';
import Features from './Features';
import Newsletter from '../components/Newsletter';
import BlogSection from './BlogSection';

const Home = () => {
    return (
        <div>
           <HeroSection/>
           <CollectionSection/>
           <ProductsPage/>
           <TrendyHero/>
           <BlogSection/>
           <Features/>
           {/* <TrendayProducts/> */}
           <Newsletter/>
        </div>
    );
};

export default Home;