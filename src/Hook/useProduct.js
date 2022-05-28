import { useEffect, useState } from "react"
import { useQuery } from "react-query";


const useProduct =()=>{

    const {data:products, isLoading,refetch}=useQuery('products',()=>fetch('http://localhost:5000/product')
    .then(res=>res.json()))
    // const [products, setProducts]=useState([])

    // useEffect(()=>{
    //    fetch('http://localhost:5000/product')
    //    .then(res=>res.json())
    //    .then(data=>setProducts(data))  
    // },[products])
    // return [products]
    return {products, isLoading, refetch}
}
export default useProduct;