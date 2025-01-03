import React from 'react';
import insta from './insta.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';

const Footer = () => {
  return (
   <div className='bg-[#323846] h-[30vh] flex justify-center items-center parfoot'>

    <div className='grid grid-cols-3 w-[75vw] mx-auto  text-white gap-10 foot'>
       <div>
        <h1 className='text-[1.8rem] mb-3 font-semibold'>My Portfolio</h1>
        <div className='mb-3 line leading-5'>
        Thank you for visiting my personal portfolio website. Connect with me over socials.
        </div>
        <div className='flex mt-10'>
        <a href="https://www.instagram.com/rarebro143/"><img src={insta} alt="" className='h-[40px] w-[40px] mr-4 cursor-pointer hicon2'/></a>

       <a href="https://www.linkedin.com/in/arman-khan-4aa6672a1/?trk=opento_sprofile_details"><img src={linkedin} alt="" className='h-[40px] w-[40px]  mr-4 cursor-pointer hicon2'/></a> 

       <a href="https://x.com/ArmanMalik25388"><img src={twitter} alt="" className='h-[40px] w-[40px]  mr-4 cursor-pointer hicon2'/></a> 
      </div>
       </div>



       <div>
       <h1 className='text-[1.8rem] mb-3 font-semibold'>Quick Links</h1>
       <div>
       <div className='flex items-center py-[0.3vh] cursor-pointer hover:text-[#01eeff]'>
       <i class="fa-solid fa-circle-chevron-right"></i>
       <h1 className='pl-1'> <a href="#nav">Home</a></h1>
       </div>
       
       <div className='flex items-center py-[0.3vh] cursor-pointer hover:text-[#01eeff]'>
       <i class="fa-solid fa-circle-chevron-right"></i>
       <h1 className='pl-1'><a href="#about">About</a></h1>
       </div>

       <div className='flex items-center py-[0.3vh] cursor-pointer hover:text-[#01eeff]'>
       <i class="fa-solid fa-circle-chevron-right"></i>
       <h1 className='pl-1'> <a href="#contact">Contact</a></h1>
       </div>

       <div className='flex items-center py-[0.3vh] cursor-pointer hover:text-[#01eeff]'>
       <i class="fa-solid fa-circle-chevron-right"></i>
       <h1 className='pl-1'><a href="#assignment">Assignment</a></h1>
       </div>

       <div className='flex items-center py-[0.3vh] cursor-pointer hover:text-[#01eeff]'>
       <i class="fa-solid fa-circle-chevron-right"></i>
       <h1 className='pl-1'><a href="#project">Projects</a></h1>
       </div>

     

      

       </div>
    </div>



       <div>
<h1 className='text-[1.8rem] mb-3 font-semibold'>Contact Info</h1>
<div>
  <div className='flex items-center py-1'>
  <i class="fa-solid fa-phone text-[#01eeff]"></i>
  <div className='pl-2'>+91 8287357224</div>
  </div>
  <div className='flex items-center py-1'>
  <i class="fa-solid fa-envelope text-[#01eeff]"></i>
  <div className='pl-2'>tallycom25@gmail.com</div>
  </div>
  <div className='flex items-center py-1'>
  <i class="fa-solid fa-location-dot text-[#01eeff]"></i>
  <div className='pl-2'>Delhi, india</div>
  </div>

</div>
       </div>
       
       
    </div>

    </div>
  )
}

export default Footer;