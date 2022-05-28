import React, { useEffect, useState } from 'react';
import useProduct from '../../Hook/useProduct';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
    const {products,isLoading }= useProduct()


     if(isLoading){
         return <Loading/>
     }
    return (
        <div>
            <h3 className='text-center font-bold text-2xl '> FEATURED PRODUCTS {products.length}</h3>
           <div className='grid gap-3 lg:grid-cols-3 md:grid-cols-2'>
           {products.map(product=><Product key={product._id} product={product}/>)}
           </div>
        </div>
    );
};

export default Products;