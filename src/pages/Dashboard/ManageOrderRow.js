import React from 'react';


const ManageOrderRow = ({manageOrder,index,setDeleteOrder}) => {
    // console.log(manageOrder)
    const {_id}=manageOrder;

   const handleShipt=()=>{
         
    const payment = {
        status:'shifted'
      }
      fetch(`https://enigmatic-dawn-68660.herokuapp.com/myordershift/${_id}`,{
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
        
        
        <td>{(manageOrder.totalPrice && !manageOrder.paid )&& <label onClick={()=>setDeleteOrder(manageOrder)} class="btn btn-sm bg-[hsl(9,98%,52%)] border-0 text-white"  for="delete-order" >cancel</label>}
        {(manageOrder.totalPrice && manageOrder.paid )&& <>            
            
            {manageOrder.status=='shifted'? <button  className='btn btn-sm bg-[#00d300] border-0 text-white'>shifted</button>  : <p><span onClick={handleShipt} className=' btn btn-sm bg-fuchsia-400 border-0 text-white'>pending</span>  </p>}
              
            </>}
        </td>
        {/* <td>
            {manageOrder.status && <p className='bg-primary rounded-md'>{manageOrder.status}</p>}
         
          </td> */}
      </tr>
      
    );
};

export default ManageOrderRow;