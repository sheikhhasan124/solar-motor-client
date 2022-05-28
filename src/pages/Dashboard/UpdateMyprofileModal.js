import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const UpdateMyprofileModal = ({updateProfile}) => {
//    console.log(updateProfile)
const [user] = useAuthState(auth)

/* const handleUpdateProfile =(event)=>{
    event.preventDefault()
     
     console.log(event.target.name.value)      
   
   
      
    //   fetch(`http://localhost:5000/userinf/${email}`,{
    //         method:'PATCH',
    //         headers:{
    //           'content-type': 'application/json',
             
    //         },
    //         body:JSON.stringify(profile)
    //       }).then(res=>res.json())
    //       .then(data=>{
            
    //         console.log(data)
    //       })
   } */

    return (
      <div>
    
        <input type="checkbox" id="profile-updateModal" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
              <h2>{updateProfile.location}</h2>
              <form>
                 
              <input type="text" name='educat' placeholder="education" class="input input-bordered w-full max-w-xs" />
              <input type="text" name='location' placeholder="location" class="input input-bordered w-full max-w-xs" />
              <input type="text" name='link' placeholder="link" class="input input-bordered w-full max-w-xs" />
               <input type="submit" className='btn' value="submit" />
              </form>
            <div class="modal-action">
              <label for="profile-updateModal" class="btn">cansel</label>
            </div>
          </div>
        </div>
      </div>
       
    );
};

export default UpdateMyprofileModal;