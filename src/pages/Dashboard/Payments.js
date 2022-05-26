import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckOutForm';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(`pk_test_51L2BQ1CJu1xjIM5SfbvN8CfqrmqNojggr9Hhfd7h5J6JZJOHYie63yQd924XwA9i40wVLzXACh8TAaAOtGFjTJWt00zaTjsVFE`)

const Payments = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/myorder/${id}`
    const {data: order,isLoading}=useQuery(['order',id],()=>fetch(url).then(res=>res.json()))


    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <h2>please pay your {id}</h2>
            <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <p className="text-2xl font-bold text-green-500">hello {order.userName}</p>
          <h2 class="card-title">pay for {order.productName} </h2>
          
         <p>please pay ${order.totalPrice}</p>
        </div>
        
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order}/>
      </Elements>
        </div>
      </div>
        </div>
    );
};

export default Payments;