import React from 'react';
import SubbannerOne from '../../asset/subbannerone.jpg'
import SubbannerTwo from '../../asset/subbannertwo.jpg'
import { FaCaravan,FaBoxOpen,FaRegAddressCard,FaLock } from "react-icons/fa";



const Subbanner = () => {
    const cares= [
        {
            id:1,
            p: <FaCaravan/>,
            care:'Free Shipping',
            desc:'Free worldwide shipping on all area on order above $200'
        },
        {
            id:2,
            p: <FaBoxOpen/>,
            care:'5 Days Easy Return',
            desc:'Product any fualt within 07 days for an immediately exchange'
        },
        {
            id:3,
            p:<FaRegAddressCard/>,
            care:'Friendly Support 24/7',
            desc:'Our support team always ready for you to 7 days a week'
        },
        {
            id:2,
            p:<FaLock/>,
            care:'Payment Secure',
            desc:'We ensure 100% secure payment with online payment'
        },
    ]
    return (
        <div className='my-12'>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 flex justify-center gap-3'>
           {cares.map(care=><div className='my-4 '>
                 <p className='text-primary text-5xl'>{care.p}</p>
                <h2 className='text-[20px] font-bold text-black'>{care.care}</h2>
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