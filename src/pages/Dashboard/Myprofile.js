import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';

const Myprofile = () => {
    const [user]=useAuthState(auth)
    const [myinf,setMyinf]=useState({})
   const email = user?.email
    useEffect(()=>{
         fetch(`http://localhost:5000/userinf/${email}`)
         .then(res=>res.json())
         .then(data=>setMyinf(data))
    },[])
    
    //  console.log(user)



    const handleinfo = event =>{
        event.preventDefault()

        const inf = {
             education : event.target.education.value,
             location : event.target.location.value,
             link : event.target.link.value,
              email:email
        }
        fetch(`http://localhost:5000/userinf`,{
            method : 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(inf)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast.success('data send')
            }
        })
    }

    // console.log(user.email)
    



    return (
        <div>
            <h1>my profile</h1>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
      <p class="py-6  font-bold">Name : {user.displayName}</p>
      <h1>Email : {user.email}</h1>
      <p class=" ">Education : {myinf.education}</p>
      <p>Location : {myinf.location}</p>
      <p>Link : {myinf.link}</p>
  </div>
</div>

{myinf.location? ' ':<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handleinfo}>
     <div class="card-body">
        <div class="form-control">
          <input type="text" name='education' placeholder="education" class="input input-bordered" />
        </div>
        <div class="form-control"> 
          <input type="text" name='location' placeholder="location" class="input input-bordered" />  
        </div>
        <div class="form-control">   
          <input type="text" name='link' placeholder="link" class="input input-bordered" /> 
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">submit</button>
        </div>
      </div>
     </form>
    </div>}



        </div>
    );
};

export default Myprofile;