import React from 'react'
import { FaCopyright } from 'react-icons/fa'

    const phoneNumber = '+2348161711309'; // Replace with your number in international format
    const message = 'Hi, I’d like to ask about your services!'; // Message to prefill in WhatsApp chat
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const Footer = () => {
  return (
    <footer id='footer' className=' flex flex-col justify-between items-center h-full bg-neutral-950'>
        <div className="overflow-hidden w-full relative">
            <div className="animate-marquee "> 
                <span className="uppercase font-semibold  whitespace-nowrap">
                    design + development + Fashion academy + Production +
                </span>
                <span className="uppercase font-semibold  whitespace-nowrap">
                    design + development + Fashion academy + Production +
                </span>
            </div>
        </div>
        <div className='container mx-auto flex flex-col space-y-10 md:space-y-0 justify-center text-center md:text-start items-center md:items-start md:flex-row md:justify-between w-full p-5 md:py-10'>
            <div className=''>
                <h2 className='font-normal text-lg font-ade text-white'>
                  Greysville Designs
                </h2>
                <p className='text-sm text-[#f2f3f9]'>Make a fashion statement with us</p>
            </div>

            <div className='space-y-1'>
                <h4 className='font-medium md:font-bold text-lg text-white'>Contact us</h4>
                <ul className='space-y-1'>
                    <a href=""><li>Instagram</li></a>
                    <a href=""><li>Facebook</li></a>
                    <a href=""><li>Tiktok</li></a>  
                    <a href={whatsappUrl}><li>Whatsapp</li></a>           
                </ul>
            </div>

            <div className='space-y-1'>
                <h4 className='font-medium md:font-bold text-lg text-white'>Navigation</h4>
                <ul className='space-y-1'>
                    <a href="#about"><li>About us</li></a>
                    <a href="#featured"><li>featured products</li></a>
                    <a href="#faqs"><li>FAQs</li></a>      
                </ul>
            </div>
            
        </div>
        
        <div className='w-full h-[1px] bg-white'></div>

        <div className='my-2 flex items-center space-x-1 text-white'>
            <FaCopyright />
            <p className='text-sm '>  All right reserved | <span className='font-normal text-sm font-ade text-white'> Greyville designs </span>2024</p>
        </div>
        
    </footer>
  )
}

export default Footer