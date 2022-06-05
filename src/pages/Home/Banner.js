import React from 'react';
import banner from '../../asset/banner.jpeg'

const Banner = () => {
    return (
        <div style={{background: `url(${banner})`,backgroundSize:'cover'}} class="hero min-h-screen" >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5  lg:text-6xl text-5xl font-bold">RENEWABLE ENERGY</h1>
            <p class="mb-5 text-xl font-bold">Make Natural Environment. Get Solar Energy. Remove co2. Make better future for our generation</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;