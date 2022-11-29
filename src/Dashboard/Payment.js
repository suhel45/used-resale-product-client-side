import React from 'react';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_test_51M9PYvBaA4rypcEpJAbWtoBrpXtGHk33SHM5U8ByRe9TKhgdfP2ARnHvQ1KdZum0muQipcZ00iEN4qoMN5CKCEtU00zzSBUr9P');
const Payment = () => {
    const booking = useLoaderData();
    return (
        <div className='mt-14 w-1/2'>
            <Elements stripe={stripePromise}>
      <Checkout
      booking={booking}
       />
    </Elements>
        </div>
    );
};

export default Payment;