import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deleteOrder,setDeleteOrder}) => {
    const {productName,email}=deleteOrder;
    const orderDelete=()=>{
        fetch(`https://enigmatic-dawn-68660.herokuapp.com/myorder/${email}`,{
          method:'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                toast.success('doctor deleted')
                // refetch()
                setDeleteOrder(null)
            }
        })
    }
    return (
        <div>

<input type="checkbox" id="delete-order" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{`are u sure to delete ${productName}`}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="delete-order" class="btn">cansel</label>
      <button onClick={()=>orderDelete()} class="btn btn-outline btn-warning">remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteOrderModal;