import React from 'react';
import { Link } from 'react-router-dom';

const MyItemsRow = ({orderItem,setDeleteOrder,index}) => {
    
    return (

            <tr key={index}>
         
         <th>{index + 1}</th>
         <td>{orderItem.userName}</td>
         <td>{orderItem.productName}</td>
         <td>{orderItem.totalPrice}</td>
         <td>{orderItem.totalOrder}</td>
         <td>{(orderItem.totalPrice && !orderItem.paid )&& <label class="btn btn-sm"  onClick={()=>setDeleteOrder(orderItem)} for="delete-order" >cancel</label>
}</td>
         <td>
           {(orderItem.totalPrice && !orderItem.paid )&& <Link to={`/dashboard/payment/${orderItem._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
           {(orderItem.totalPrice && orderItem.paid )&& <div>            
               <p><span className='text-success'>paid</span>  </p>
               <p><span className='text-success'>{orderItem.transectionId}</span>  </p>
             </div>}
           </td>
       </tr>
       
    );
};

export default MyItemsRow;