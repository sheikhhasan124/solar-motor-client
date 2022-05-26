
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import OrderMode from './OrderMode';
import PurchaseItem from './PurchaseItem';


const Purchase = () => {
  const {id} = useParams();
  const [item,setItem]=useState({})
  const [order,setOrder]=useState(null)
  const [orderNum,setOrderNum]=useState(50)
  
  useEffect(()=>{
    const func = async()=>{
      const url = `http://localhost:5000/product/${id}`
      let res = await fetch(url)
      let data = await res.json()
      setItem(data)
    }
    func()
  },[id])

  
  //  const {data:item,isLoading}=useQuery(['item',id],()=>fetch(`http://localhost:5000/product/${id}`).then(res=>res.json()))


  
  return (
   <div>
     <div>
     {item&& <PurchaseItem setOrderNum={setOrderNum} orderNum={orderNum} setOrder={setOrder} item={item}/>}
     </div>
     {order && <OrderMode orderNum={orderNum} order={order} setOrder={setOrder}/>}
   </div>
  );
};

export default Purchase;