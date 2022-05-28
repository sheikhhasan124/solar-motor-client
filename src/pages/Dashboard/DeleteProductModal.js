import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({deleteProduct,setDeleteProduct, refetch}) => {
    const {productName,_id}=deleteProduct;
    const orderDelete=()=>{
        fetch(`http://localhost:5000/product/${_id}`,{
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
                refetch()
                setDeleteProduct(null)
            }
        })
    }
    return (
        <div>

<input type="checkbox" id="delete-product" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{`are u sure to delete ${productName}`}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="delete-product" class="btn">Yay!</label>
      <button onClick={()=>orderDelete()} class="btn btn-outline btn-warning">remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteProductModal;