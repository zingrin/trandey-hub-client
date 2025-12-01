import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductsPage from '../components/ProductsPage';
import CollectionSection from '../components/CollectSection';
import TrendyHero from '../components/TrendyHero';
import Features from './Features';

const Home = () => {
    return (
        <div>
           <HeroSection/>
           <CollectionSection/>
           <ProductsPage/>
           <TrendyHero/>
           <Features/>
           {/* <TrendayProducts/> */}
        </div>
    );
};

export default Home;