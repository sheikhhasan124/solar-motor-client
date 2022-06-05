import React from 'react';
import { FaFacebookSquare,FaTwitterSquare ,FaInstagramSquare,FaClock} from "react-icons/fa";


import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const today = date.toLocaleDateString() 
    return (
        <div className='footer-container'>
            <div className="footer-info">
             <div>
                <h3 className='title colore-white'>SOLAR MOTOR</h3>
                <p>Consulting WP - Before we talk destination, we shine a spotlight across your organization to fully understand its people, processes, and technology.</p>
            </div>
            <div className="pages">
                <h3 className='title  colore-white'>PAGES</h3>
                <button>HOME</button>
                <button>SERVICES</button>
                <button>APPOINTMENT</button>
                <button>ABOUT</button>
                <button>BLOG</button> 
            </div>
            <div className="recent-news">
                <div>
                    <h3 className='title  colore-white'>RECENT NEWS</h3>
                    <p>VIEW ALL</p>
                    <h6 className='colore-white'>Evaluating the furniture industry's gender balance. The UK furniture industry</h6>
                    <div className="date">
                         <span className='me-2'><FaClock></FaClock></span>
                        <span>{today}</span>
                    </div>
                </div>
                <div className="hr"></div>
                <div>
                    
                    <h6 className='colore-white'>Discover contemporary furniture & interiors with design ideas, product features & latest trade information brought to you by Furniture News Magazine</h6>
                    <div className="date">
                         <span className='me-2'><FaClock></FaClock></span>
                        <span>{today}</span>
                    </div>
                </div>
            </div>
            <div className="newsLetter">
                <h3 className='title  colore-white'>NEWSLETTER</h3>
                <p>Recieve our latest news straight to your inbox</p>
              
                <input type="text" placeholder='Email adderess' />
                <button>SUBSCRIBE</button>
                
            </div>
            </div>
            <div className="hr"></div>
            <div className='footer-social'>
                <p><small>All right reserved by {year} Solar Motor.</small></p>
                <div className="social-icon">
                    <button><FaFacebookSquare></FaFacebookSquare></button>
                    <button><FaTwitterSquare/></button>
                    <button><FaInstagramSquare/></button>
                </div>
            </div>
        </div>
    );
};

export default Footer;