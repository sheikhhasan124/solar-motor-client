import React from 'react';

const ManageProductRow = ({product,setDeleteProduct}) => {
    const {name, img,_id}=product;
    return (
        <div className='flex justify-between items-center border-2 my-2 ml-5 border-yellow-600 p-3'>
            <img className='w-[100px] rounded-lg ' src={img} alt="" />
            <h2>{name}</h2>
        
        <label className='btn btn-sm bg-[hsl(9,98%,52%)] border-0 text-white' onClick={()=>setDeleteProduct(product)}  for="delete-product" >cancel</label>
        </div>
    );
};

export default ManageProductRow;