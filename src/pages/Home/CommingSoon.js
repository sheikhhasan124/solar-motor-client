import React from 'react';
import comeSoon from '../../asset/roof-solar.jpg'
import solar1 from '../../asset/solar-1.jpg'
import solar2 from '../../asset/solar-2.jpg'
import solar3 from '../../asset/solar-3.jpg'
import solar4 from '../../asset/solar-4.jpg'
const CommingSoon = () => {
       
            const comming = [
                {
                    id: 1,
                    name:'solar qupiditant',
                    price:20,
                    img: solar1
                },
                {
                    id: 2,
                    name:'whell',
                    price:20,
                    img: solar2
                },
                {
                    id: 3,
                    name:'solar stripe stick',
                    price:20,
                    img: solar3
                },
                {
                    id: 4,
                    name:'whell',
                    price:20,
                    img: solar4
                },
            ]
    
        return (
         <div className='my-4'>
               <h2 className='font-bold text-3xl text-center py-5'>COMING <span className="text-amber-500">SOON</span></h2>
                <div style={{background: `url(${comeSoon})`,backgroundSize:'cover'}} class="hero min-h-screen" >
            <div class="hero-overlay "></div>
            <div class="hero-content text-center text-neutral-content">
              <div>
                 
              <div class=" grid grid-cols-2 lg:grid-cols-4 ">
                 {comming.map(some=><div className='bg-[white] opacity-75 p-3'>
                     <img className='hover:scale-125  ease-in duration-300 h-[200px]' src={some.img} alt="" />
                    
                 </div>)}
              </div>
              </div>
            </div>
          </div>
         </div>
        );
    };
    
    


export default CommingSoon;