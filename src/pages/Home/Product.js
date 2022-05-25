import React from 'react';

const Product = ({product}) => {
    const {img,name,desc,price,avaqnt,minqnt}=product;
    console.log(product)
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-4">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl h-[200px]" />
  </figure>
  <div class="card-body items-center text-center">
   <div className='flex'>
   <h2 className='text-[17px] pr-3 text-green-500'>{name}</h2>
    <p className='font-bold text-gray-500'>Available : {avaqnt}</p>
   </div>
   <hr className='text-gray-500 w-full h-3'/>
    <p>{desc.slice(0,60)}</p>
    <hr className='text-gray-500 w-full h-3'/>
    <p className='text-gray-500 font-semibold'>Price Per Unit: <span className='text-rose-500'>${price}</span><span className='text-gray-400 ml-4 line-through'>${price+100}</span></p>
    <hr className='text-gray-500 w-40 h-3'/>
    <div className=' grid grid-cols-2 gap-20 items-center'>
      <div><button class="btn btn-sm block flex-1">Place Order</button></div>
      <div><p className='text-rose-500 font-semibold'>Min Order : {minqnt}</p></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;