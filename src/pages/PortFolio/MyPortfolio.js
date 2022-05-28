import React from 'react';
import react from '../../asset/react.png'

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={react} class="max-w-sm rounded-lg shadow-2xl" alt='df' />
    <div>
      <h1 class="text-5xl font-bold">Hasan ullah</h1>
      <p class="py-3">mdhasanullah124@gmail.com</p>
      <p class="">Honours: English deperment, univercity of khulna</p>
      <h3 className='text- font-bold pt-5'>what skill i have</h3>
      <ul>
          <li>html</li>
          <li>css</li>
          <li>bootstrap</li>
          <li>tailwind css</li>
          <li>Javascript</li>
          <li>react js</li>
          <li>node js</li>
          <li>express js</li>
          <li>mongoDB</li>
          <li>git & github </li>
      
      </ul>
        
        <h3 className='text-xl font-bold'>sample website link</h3>
         <p>https://furniture-warehouse-35670.web.app/</p>
         <p>https://bien-health-4c6ec.web.app/</p>
         <p>https://t-shirt-collection-c88f81.netlify.app/</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default MyPortfolio;