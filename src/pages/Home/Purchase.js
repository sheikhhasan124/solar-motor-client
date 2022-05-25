import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const {id}=useParams()
   const [purchaseItem, setPurchaseItem]=useState({})
   useEffect(()=>{
      fetch(`http://localhost:5000/product/${id}`)
      .then(res=>res.json())
      .then(data=>setPurchaseItem(data))
   },[id])

   const {name,img,desc,price,avaqunt,minqnt}=purchaseItem
    return (
        <div>
          <h2>purchase {id}</h2> 
          <p>{name}</p> 
          <img src="" alt="" />
        </div>
    );
};

export default Purchase;