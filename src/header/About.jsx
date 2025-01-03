import React from 'react'
import insta from './insta.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import header from './header.css'
import banner from './mera banner png.png'
import aboutimg from './about image.png'
import aboutimg2 from './about2.png'

const Home = () => {
  return (
    <div className='h-[93vh] bg-[#323846]' id='about'>
      <div className=' w-[90vw] mx-auto h-[93vh] flex home-one pb'>

        <div className='w-[50vw] h-[93vh] flex flex-col justify-center hh-two' data-aos="fade-left" >
          <img className='hh-two home-pic' src={aboutimg} alt="" />
         </div>
      


        <div className='h-[93vh]  w-[40vw] flex flex-col justify-center' data-aos="fade-right">
   
      <h1 className='text-[4rem] text-white font-bold hhh-one'>About Me</h1>
      <h1 className='text-[2.2rem] text-white font-bold hhh-one'>Frontend Developer </h1>
      <h1 className='text-[1rem] text-white my-6 hhh-two'>Highly skilled web Developer Creating dynamic and responsive websites. Proficient
in front-end technologies including HTML5, CSS3, JavaScript, React. Passionate
about coding best practices and user-centered design. Seeking to contribute to
innovative projects in a fast-paced environment.
</h1>
   
      <button className='bg-[#01eeff] text-[#20242d] h-[50px] w-[180px] rounded-3xl mt-5 font-bold but2 buttt'><a href="https://www.linkedin.com/in/arman-khan-4aa6672a1/?trk=opento_sprofile_details">Read More</a></button>
      
      </div>

     
      </div>
    </div>
  )
}

export default Home;