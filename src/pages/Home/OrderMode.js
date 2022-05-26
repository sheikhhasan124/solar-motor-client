import React, { useEffect, useState } from 'react';
import auth from '../../firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';

const OrderMode = ({order,orderNum}) => {
    
    const {name,price}=order;
    const [user, loading, error] = useAuthState(auth);
    const [orderprice,setPrice] = useState(orderNum*price)


    useEffect(()=>{
       setPrice(orderNum*price)
    },[orderNum])

    const handleBooking=(event)=>{
        // event.preventDefault()
        // const slot = event.target.slt.value;

        // const booking = {
          
        //   treatment:name,
    
        //   slot,
        //   price,
        //   patient:user.email,
        //   patientName:user.displayName,
        //   phone: event.target.phone.value
        // }
        // fetch('http://localhost:5001/booking',{
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(booking)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //   console.log(data)
        //   if(data.success){
        //      toast(`appoinment is set, ${formattedDate} at ${slot}`)
        //    }
        //    else{
        //      toast.error(`already have an appoinment on ${data.booking.date} at ${data.booking.slot}`)
        //    }
          
        //   //to close the modal
        //    setTreatment(null)
        // })
    }

    return (
        <div>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{name}</h3>
    
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
   
    
    <input type="text" value={user?.displayName} name="name"className="input input-bordered w-full max-w-xs" />
    <input type="email" value={user?.email} name='email'className="input input-bordered w-full max-w-xs" />
    <input type="text" value={orderNum}  name='orderNum'className="input input-bordered w-full max-w-xs" />
    <input type="text" value={orderprice} name='totalPrice'className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Phone" name='phone'className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="SUBMIT"className= "bg-secondary btn  text-white input-bordered w-full max-w-xs" />
    </form>
     

    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default OrderMode;