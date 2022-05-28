import React from 'react';


const ManageOrderRow = ({manageOrder,index,setDeleteOrder}) => {
    // console.log(manageOrder)
    const {_id}=manageOrder;

   const handleShipt=()=>{
         
    const payment = {
        status:'shifted'
      }
      fetch(`http://localhost:5000/myordershift/${_id}`,{
            method:'PATCH',
            headers:{
              'content-type': 'application/json',
             
            },
            body:JSON.stringify(payment)
          }).then(res=>res.json())
          .then(data=>{
            
            console.log(data)
          })
   }


    return (
        <tr key={index}>
         
        <th>{index + 1}</th>
        <td>{manageOrder.userName}</td>
        <td>{manageOrder.productName}</td>
        
        
        <td>{(manageOrder.totalPrice && !manageOrder.paid )&& <label onClick={()=>setDeleteOrder(manageOrder)} class="btn btn-sm"  for="delete-order" >cancel</label>}
        {(manageOrder.totalPrice && manageOrder.paid )&& <>            
            
            {manageOrder.status=='shifted'? <button disabled className='text-success btn btn-sm bg-danger'>shifted</button>  : <p><span onClick={handleShipt} className='text-success btn btn-sm bg-danger'>Shipt Now</span>  </p>}
              
            </>}
        </td>
        <td>
            {manageOrder.status && <p className='bg-primary rounded-md'>{manageOrder.status}</p>}
         
          </td>
      </tr>
      
    );
};

export default ManageOrderRow;