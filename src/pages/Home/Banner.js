import React from 'react';
import banner from '../../asset/energy-banner.jpg'

const Banner = () => {
    return (
        <div style={{background: `url(${banner})`,backgroundSize:'cover'}} class="hero min-h-screen" >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5  lg:text-6xl text-5xl font-bold">RE<span className='text-primary'>NE</span>WABLE EN<span className='text-primary'>ER</span>GY</h1>
            <p class="mb-5 text-xl font-bold">Make Natural Environment.<span className='text-primary'>Get Solar Energy.</span> Remove co2. Make better future for our generation</p>
            <button class="btn btn-gradient">Explore now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;