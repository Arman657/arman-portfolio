import React from 'react'
import insta from './insta.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import header from './header.css'
import banner from './mera banner png.png'
import mycv from './mycv.pdf'
import About from './About';
import Contact from './Contact';
import Assignment from './Assingnment'
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
  return (
    < div className='bg-[#20242d]' id='home'>
    <div className='h-[93vh] home-main  '>
      <div className=' w-[90vw] mx-auto h-[93vh] flex home-one'>
      <div className='h-[93vh]  w-[40vw] flex flex-col justify-center hh-one' data-aos="fade-right">
      <h1 className='text-[2.2rem] text-white font-bold hhh-one'>Hello It's Me</h1>
      <h1 className='text-[4rem] text-white font-bold hhh-one'>Arman Malik</h1>
      <h1 className='text-[2.2rem] text-white font-bold hhh-one'>And I'am a <span className='text-[#01eeff]'>Frontend Developer</span> </h1>
      <h1 className='text-[1rem] text-white my-6 hhh-two'>Learning to code is useful no matter what your career ambitions are. Learning to code is useful no matter what your career ambitions are.</h1>
      <div className='flex'>
        <a href="https://www.instagram.com/rarebro143/"><img src={insta} alt="" className='h-[40px] w-[40px] mr-4 cursor-pointer hicon'/></a>

       <a href="https://www.linkedin.com/in/arman-khan-4aa6672a1/?trk=opento_sprofile_details"><img src={linkedin} alt="" className='h-[40px] w-[40px]  mr-4 cursor-pointer hicon'/></a> 

       <a href="https://x.com/ArmanMalik25388"><img src={twitter} alt="" className='h-[40px] w-[40px]  mr-4 cursor-pointer hicon'/></a> 
      </div>
      <button className='bg-[#01eeff] text-[#20242d] h-[50px] w-[180px] rounded-3xl mt-5 font-bold but2 buttt'><a href={mycv}>Download CV</a></button>
      
      </div>

      <div className='w-[50vw] h-[93vh] flex justify-center items-center hh-two' data-aos="fade-left">
        <img src={banner} alt=""  className='home-pic'/>
       

      </div>
      
      </div>


    </div>
    <About/>
    <Assignment/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}

export default Home;