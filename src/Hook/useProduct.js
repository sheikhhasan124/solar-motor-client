import { useEffect, useState } from "react"
import { useQuery } from "react-query";


const useProduct =()=>{

    const {data:products, isLoading,refetch}=useQuery('products',()=>fetch('https://enigmatic-dawn-68660.herokuapp.com/product')
    .then(res=>res.json()))
    // const [products, setProducts]=useState([])

    // useEffect(()=>{
    //    fetch('https://enigmatic-dawn-68660.herokuapp.com/product')
    //    .then(res=>res.json())
    //    .then(data=>setProducts(data))  
    // },[products])
    // return [products]
    return {products, isLoading, refetch}
}
export default useProduct;