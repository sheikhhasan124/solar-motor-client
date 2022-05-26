import React, { useState } from 'react';

const PurchaseItem = ({item,setOrder,setOrderNum,orderNum}) => {
     
    
    let minnum = item.minqnt
    let available = item.avaqnt
   let error;
    let inc =()=>{
      if(orderNum<available)
      setOrderNum((prev)=>prev+1)
     }
     let dec =()=>{
      if(orderNum>minnum)

       setOrderNum((prev)=> prev - 1)
     }
   

    return (
        <div  className='grid md:grid-cols-2 h-[690px] gap-12 flex items-center'>
        <div>
       <img src={item.img} alt="" />
        </div>
        <div>
          <div className='flex justify-between'>
          <h2 className='text-2xl font-bold text-primary'>{item.name}</h2>
          <p className='text-gray-500 font-semibold'>Available : {item.avaqnt}</p>
          </div>
          <hr className='w-full' />
          <p className='my-3'>{item.desc}</p>
          <hr className='w-full' />
 
            <div className='flex justify-between'>
            <p className="text-gray-500 font-semibold">
             Price Per Unit: <span className="text-rose-500">${item.price}</span>
             <span className="text-gray-400 ml-4 line-through">
               ${item.price + 100}
             </span>
           </p>
          <p className="text-gray-500 font-semibold">Total Price : {item.price * orderNum}</p>
            </div>
            <div className=''>
              <span className='text-gray-600 font-bold text-2xl'>Order Qut : </span>
              <button onClick={inc} className='text-4xl font-bold'>+</button>
              <span className='mx-5 text-2xl font-bold'>{parseFloat(orderNum)}</span>
              <button onClick={dec} className='text-4xl font-bold'>-</button>
              {/* <p>{error}</p> */}
            </div>
            
            <label onClick={()=>setOrder(item)} class="btn bg-primary w-[200px] my-3 btn-primary" for="my-modal">oder now</label>
        </div>
 
     </div>
    );
};

export default PurchaseItem;