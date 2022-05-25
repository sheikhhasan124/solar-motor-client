import React from 'react';
import SubbannerOne from '../../asset/subbannerone.jpg'
import SubbannerTwo from '../../asset/subbannertwo.jpg'

const Subbanner = () => {
    const cares= [
        {
            id:1,
            
            care:'Free Shipping',
            desc:'Free worldwide shipping on all area on order above $200'
        },
        {
            id:2,
            care:'5 Days Easy Return',
            desc:'Product any fualt within 07 days for an immediately exchange'
        },
        {
            id:3,
            care:'Friendly Support 24/7',
            desc:'Our support team always ready for you to 7 days a week'
        },
        {
            id:2,
            care:'Payment Secure',
            desc:'We ensure 100% secure payment with online payment'
        },
    ]
    return (
        <div className='my-12'>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 flex justify-center'>
           {cares.map(care=><div className='my-4 '>
                <h2 className='text-[20px] font-bold'>{care.care}</h2>
                <p className='text-gray-400'><small>{care.desc}</small></p>
            </div>)}
           </div>
           <div className='grid md:grid-cols-2 my-8'>
               <div><img src={SubbannerOne} alt="" /></div>
               <div><img src={SubbannerTwo} alt="" /></div>
           </div>
        </div>
    );
};

export default Subbanner;