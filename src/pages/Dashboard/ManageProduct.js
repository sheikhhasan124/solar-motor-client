import React, { useState } from 'react';
import useProduct from '../../Hook/useProduct';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const {products,isLoading, refetch }= useProduct()
    const [deleteProduct,setDeleteProduct]=useState(null)
    // console.log(products)

    if(isLoading){
        return <Loading/>
    }
    return (
       <div className='flex justify-center'>
            <div className='w-[350px] md:w-[500px]'>
            <h2 className='text-2xl font-bold text-center py-2'>Manage Product</h2>
             {products.map(product=><ManageProductRow setDeleteProduct={setDeleteProduct} key={product._id} product={product}></ManageProductRow>)}
        </div>
        {deleteProduct && <DeleteProductModal deleteProduct={deleteProduct} refetch={refetch} setDeleteProduct={setDeleteProduct}/>}
       </div>
    );
};

export default ManageProduct;