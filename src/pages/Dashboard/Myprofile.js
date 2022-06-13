import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';
import UpdateMyprofileModal from './UpdateMyprofileModal';

const Myprofile = () => {
    const [user]=useAuthState(auth)
    const [myinf,setMyinf]=useState({})
    const [updateProfile,setUpdateProfile]=useState(null)
   const email = user?.email
    useEffect(()=>{
         fetch(`https://enigmatic-dawn-68660.herokuapp.com/userinf/${email}`)
         .then(res=>res.json())
         .then(data=>setMyinf(data))
    },[])
    
     console.log(updateProfile)



    const handleinfo = event =>{
        event.preventDefault()

        const inf = {
             education : event.target.education.value,
             location : event.target.location.value,
             link : event.target.link.value,
              email:email
        }
        fetch(`https://enigmatic-dawn-68660.herokuapp.com/userinf`,{
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
        <div className=' mt-10'>
            <h1 className='text-2xl font-bold text-center underline'>My Profile</h1>

<div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
      <p class="py-6  font-bold">Name : {user.displayName}</p>
      <h1>Email : {user.email}</h1>
      <p class=" ">Education : {myinf.education}</p>
      <p>Location : {myinf.location}</p>
      <p>Link : {myinf.link}</p>
      <label onClick={()=>setUpdateProfile(myinf)} for="profile-updateModal" class="btn ">update</label>
     
  </div>
</div>

<div>
{myinf.location? ' ':<div class="card  max-w-sm shadow-2xl bg-base-100">
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
    {updateProfile && <UpdateMyprofileModal updateProfile={updateProfile}/>}
        </div>
    );
};

export default Myprofile;