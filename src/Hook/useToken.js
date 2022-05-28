import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase_init";

const { useState, useEffect } = require("react")

const useToken=user=>{
  // const [user] = useAuthState(auth)
    const [token, setToken]=useState('');
    useEffect(()=>{
        // console.log('user o',user?.user?.displayName)
        const name = user?.user?.displayName
        const email = user?.user?.email;
       
        const currentUser= {
          name:name,
          email:email,
        }
        if(email){
            fetch(`http://localhost:5000/user/${email}`,{
              method:'PUT',
              headers:{
                'content-type':'application/json'  
              },
              body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log('data inside usetoken', data)
                const accessToken = data.token;
                localStorage.setItem('accessToken',accessToken)
                setToken(accessToken)
            })
        }
    },[user])
    return [token];
}
export default useToken;