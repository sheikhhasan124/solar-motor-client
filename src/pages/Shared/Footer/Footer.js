import React from 'react';
import { FaFacebookSquare,FaTwitterSquare ,FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <div className='bg-[#304356] py-10 text-center'>
            
            <div className="">
                    <button className='footer-social-btn'><FaFacebookSquare></FaFacebookSquare></button>
                    <button className='footer-social-btn'><FaTwitterSquare/></button>
                    <button className='footer-social-btn'><FaInstagramSquare/></button>
                </div>
            <div className='text-white text-xl font-semibold'>
                <p><small>All right reserved by {year} Solar Motor.</small></p>
               
            </div>
        </div>
    );
};

export default Footer;