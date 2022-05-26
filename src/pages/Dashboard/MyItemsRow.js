import React from 'react';
import { Link } from 'react-router-dom';

const MyItemsRow = ({a,setDeleteOrder,index}) => {
    
    return (
     
        
      
            <tr key={index}>
         
         <th>{index + 1}</th>
         <td>{a.userName}</td>
         <td>{a.productName}</td>
         <td>{a.totalPrice}</td>
         <td>{a.totalOrder}</td>
         <td>{(a.totalPrice && !a.paid )&& <label class="btn btn-sm"  onClick={()=>setDeleteOrder(a)} for="delete-order" >cancel</label>
}</td>
         <td>
           {(a.totalPrice && !a.paid )&& <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
           {(a.totalPrice && a.paid )&& <div>            
               <p><span className='text-success'>paid</span>  </p>
               <p><span className='text-success'>{a.transectionId}</span>  </p>
             </div>}
           </td>
       </tr>
       
    );
};

export default MyItemsRow;