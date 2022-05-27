import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div>
               <h2 className='text-5xl text-center'>404</h2> 
               <h2 className='text-xl font-bold my-5'>OOPS, PAGE NOT FOUND</h2>
               <Link className='btn bg-primary text-black border-0 w-full' to="/">Go to Home</Link> 
            </div>
        </div>
    );
};

export default NotFound;