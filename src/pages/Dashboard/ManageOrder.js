import React, { useEffect, useState } from 'react';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const [manageOrders, setMangeOrder]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5000/myorder`)
      .then(res=>res.json())
      .then(data=>setMangeOrder(data))
    },[manageOrders])


    return (
        <div>
            <h2>manage order {manageOrders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>payment</th>
        <th>condition</th>
        
      </tr>
    </thead>
    <tbody>
    {manageOrders.map((manageOrder,index)=><ManageOrderRow index={index} key={manageOrder._id}  manageOrder={manageOrder}> </ManageOrderRow>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;