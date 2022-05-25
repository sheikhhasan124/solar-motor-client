import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Subbanner from './Subbanner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Subbanner/>
            <Products/>
        </div>
    );
};

export default Home;