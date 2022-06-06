import React, { useEffect, useState } from 'react';
import DeleteOrderModal from './DeleteOrderModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const [manageOrders, setMangeOrder]=useState([])
    const [deleteOrder, setDeleteOrder]=useState(null)
    useEffect(()=>{
      fetch(`https://enigmatic-dawn-68660.herokuapp.com/myorder`)
      .then(res=>res.json())
      .then(data=>setMangeOrder(data))
    },[manageOrders])


    return (
        <div>
            <h2 className='text-2xl font-bold text-center py-2'>Manage Order</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th className='text-gray-500'>Youser Name</th>
        <th className='text-gray-500'>Product</th>
        <th className='text-gray-500'>payment</th>
        
        
      </tr>
    </thead>
    <tbody>
    {manageOrders.map((manageOrder,index)=><ManageOrderRow index={index} key={manageOrder._id}  manageOrder={manageOrder} setDeleteOrder={setDeleteOrder}> </ManageOrderRow>)}
    </tbody>
  </table>
</div>
{deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder}/>}
        </div>
    );
};

export default ManageOrder;