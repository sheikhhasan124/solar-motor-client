import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
      const stripe = useStripe()
      const elements = useElements()
      const [err,setErr]=useState('')
      const [success,setSuccess] = useState('')
      const [processing, setProcessing] = useState(false)
      const [transectionId, setTransectionId]=useState('')
      const [clientSecret, setClientSecret]=useState('')  
    const {_id, totalPrice, email, userName} = order;

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify({totalPrice})
        })
         .then(res=>res.json())
         .then(data=>{
          if(data?.clientSecret){
              setClientSecret(data.clientSecret)
          }
         })
  
      },[totalPrice])


      const handleSubmit= async(event)=>{
        event.preventDefault()

        if(!stripe || !elements){
            return 
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        });

       setErr(error?.message || '')
        setSuccess('')
        setProcessing(true)

       // confirm card payment 
       const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
       clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
             email: email
            },
          },
        },
      );
        
      if(intentError){
          setErr(intentError?.message)
          setProcessing(false)
      }
      else{
          setErr('')
          setTransectionId(paymentIntent)
          // console.log(paymentIntent)
           setSuccess('your payment completed')

           //backend update
           // and payment store on database
           const payment = {
             appoinment : _id,
             transectionId: paymentIntent.id,
             status:'pending'
           }
          fetch(`http://localhost:5000/myorder/${_id}`,{
            method:'PATCH',
            headers:{
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(payment)
          }).then(res=>res.json())
          .then(data=>{
            setProcessing(false)
            console.log(data)
          })
      }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
          err && <p className='text-red-500'>{err}</p>
      }
      {
          success && <p className='text-green-500'>{success} tranjactionId:{transectionId.id}</p>
      }
        </>
    );
};

export default CheckoutForm;