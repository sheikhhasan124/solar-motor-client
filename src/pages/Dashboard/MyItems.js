import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import DeleteOrderModal from './DeleteOrderModal';
import MyItemsRow from './MyItemsRow';

const MyItems = () => {
    const [user]=useAuthState(auth)
    const [orderItems, setOrderItems]=useState([])
    const [deleteOrder,setDeleteOrder]=useState(null)
        // console.log(orderItems)
    const navigate = useNavigate()
   
    useEffect(()=>{
        if(user){
            fetch(`https://enigmatic-dawn-68660.herokuapp.com/myorder?email=${user.email}`,{
              method:'GET',
              headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            .then(res=> {
              // console.log(res)
              if(res.status === 401 || res.status === 403){
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/')
              }
              // jkon multiline korbo tokon retur korte hobe
             return res.json()
        })
        .then(data=> setOrderItems(data))
        }
     },[user,orderItems])
    return (
        <div>
            <h1 className='text-xl font-semibold my-6'>My Order</h1>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th className='text-gray-500'>Name</th>
        <th className='text-gray-500'>Product</th>
        <th className='text-gray-500'>price</th>
        <th className='text-gray-500'>order</th>
        <th className='text-gray-500'>condition</th>
        <th className='text-gray-500'>payment</th>
        
      </tr>
    </thead>
    <tbody>
    {orderItems.map((orderItem,index)=><MyItemsRow index={index} key={orderItem._id}  orderItem={orderItem} setDeleteOrder={setDeleteOrder}> </MyItemsRow>)}
    </tbody>
  </table>
</div>
   {deleteOrder && <DeleteOrderModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder}/>}
</div>
    );
};

export default MyItems;