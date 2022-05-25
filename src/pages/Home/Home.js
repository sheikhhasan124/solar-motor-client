import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Review from './Review';
import Subbanner from './Subbanner';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Subbanner/>
            <Products/>
            <Summary/>
            <Review/>
        </div>
    );
};

export default Home;