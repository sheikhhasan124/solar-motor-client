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
            fetch(`http://localhost:5000/myorder?email=${user.email}`,{
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
            <h1>my items{orderItems.length}</h1>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>price</th>
        <th>order</th>
        <th>condition</th>
        <th>payment</th>
        
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