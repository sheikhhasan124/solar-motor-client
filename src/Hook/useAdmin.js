import { useEffect, useState } from "react"

const useAdmin = (user)=>{
    const [admin,setAdmin]=useState(false)
    const [adminLoadin,setAdminLoading]=useState(true)
    useEffect(()=>{
      const email = user?.email;
      if(email){
          fetch(`https://enigmatic-dawn-68660.herokuapp.com/admin/${email}`,{
              method:'GET',
              headers:{
                  'content-type':'application/json',
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res=>res.json())
          .then(data=>{
              setAdmin(data.admin)
              setAdminLoading(false)
          })
      }
    },[user])
    return [admin,adminLoadin]
}
export default useAdmin;