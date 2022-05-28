import React from 'react';
import comeSoon from '../../asset/solar-economics-900x512.jpg'
import qupiditant from '../../asset/qupiditant.webp'
import tayar from '../../asset/tayar.webp'
import strice from '../../asset/stripe-stick.webp'

const CommingSoon = () => {
       
            const comming = [
                {
                    id: 1,
                    name:'solar qupiditant',
                    price:20,
                    img: qupiditant
                },
                {
                    id: 2,
                    name:'whell',
                    price:20,
                    img: tayar
                },
                {
                    id: 3,
                    name:'solar stripe stick',
                    price:20,
                    img:strice
                },
                {
                    id: 4,
                    name:'whell',
                    price:20,
                    img: tayar
                },
            ]
    
        return (
         <div className='my-4'>
               <h2 className='font-bold text-3xl text-center py-5'>COMING SOON</h2>
                <div style={{background: `url(${comeSoon})`,backgroundSize:'cover'}} class="hero min-h-screen" >
            <div class="hero-overlay "></div>
            <div class="hero-content text-center text-neutral-content">
              <div>
                 
              <div class=" grid grid-cols-2 lg:grid-cols-4 ">
                 {comming.map(some=><div className='bg-white p-3'>
                     <img src={some.img} alt="" />
                     <h2 className='text-primary font-bold'>{some.name}</h2>
                     <p className='text-red-400 font-semibold'>price $ {some.price}</p>
                 </div>)}
              </div>
              </div>
            </div>
          </div>
         </div>
        );
    };
    
    


export default CommingSoon;