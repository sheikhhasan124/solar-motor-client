import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/product')
       .then(res=>res.json())
       .then(data=>setProducts(data))  
    },[])
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