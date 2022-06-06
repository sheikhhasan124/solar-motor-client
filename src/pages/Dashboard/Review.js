import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';

const Review = () => {
     const [user]=useAuthState(auth) 

    const handleReview=(event)=>{
        event.preventDefault()

        const review = {
          
          userName:user.displayName,
         
          rating:event.target.rating.value,
          review:event.target.textarea.value,
          address:event.target.address.value
        }
        fetch('https://enigmatic-dawn-68660.herokuapp.com/review',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.success){
             toast(`review is set`)
           }
           else{
             toast.error(`error `)
           }
          
          //to close the modal
         
        })
    }
    return (
        <div className='flex justify-center'>
            <div className='my-20'>
            <h1 className='text-3xl font-semibold mb-5'>Give fidback</h1>
            
             <form onSubmit={handleReview}>
                 <textarea className='border-2 p-2' name="textarea" placeholder='Review Desc' cols="50" rows="2"></textarea><br />
                 <input className='border-2 border-slate-500 w-[390px]' type="text" name="rating" placeholder='Rating' id="" /><br />
                 <input type="text" name='address' placeholder='address'className='border-2 border-slate-500 w-[390px]' />
                 <br />
                 <input  className='btn block btn-primary w-40  mt-3' type="submit" value="submit" />
             </form>
            </div>
        </div>
    );
};

export default Review;