import React from 'react'

const Projects = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col bg-[#323846] proj' id='project'>
        <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"className='text-[3rem] font-bold text-white' >Latest <span className='text-[#01eeff]'>Projects</span></h1>
    <div  className='grid grid-cols-3 gap-5 w-[90vw] mt-5 proj-one' >
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='but4 rounded-t-md' src="https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg" alt="" />
       <h1 className='text-[1rem] text-[#20242d] font-bold h-10 flex items-center pl-3 bg-[#01eeff] rounded-b-md but2 cursor-pointer proj-text'><a href="https://moonlit-hamster-4a583e.netlify.app">To-Do App</a></h1>
        </div>
        
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='but4 rounded-t-md' src="https://i.ytimg.com/vi/MIYQR-Ybrn4/maxresdefault.jpg" alt="" />
       <h1 className='text-[1rem] text-[#20242d] font-bold h-10 flex items-center pl-3 bg-[#01eeff] rounded-b-md but2 cursor-pointer proj-text'><a href="https://lively-dodol-f7133e.netlify.app">Wether App</a> </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='but4 rounded-t-md' src="https://play-lh.googleusercontent.com/CnP-bIEeddLK3bxGJjz6l5j1wUF-2noGevt7p_arRcr_7dBh6FuMDzoSXPTI9wpyH9Ln=w526-h296-rw" alt="" />
       <h1 className='text-[1rem] text-[#20242d] font-bold h-10 flex items-center pl-3 bg-[#01eeff] rounded-b-md but2 cursor-pointer proj-text'><a href="https://jolly-dieffenbachia-bdac16.netlify.app">Stop Watch</a></h1>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='but4 rounded-t-md' src="https://i.ytimg.com/vi/J1CDaJ_d8Us/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2Xyk_e3Y4j_LZ_FhnibBrwgmp7w" alt="" />
       <h1 className='text-[1rem] text-[#20242d] font-bold h-10 flex items-center pl-3 bg-[#01eeff] rounded-b-md but2 cursor-pointer proj-text'><a href="https://astonishing-pie-78d6d3.netlify.app">BMI Calculator</a></h1>
        </div>
        
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='but4 rounded-t-md' src="https://play-lh.googleusercontent.com/4BrG5D2y6cesV87-XGQqfbyJiKjVWpE-eGonHqftG8SqozRLerameLaf5TDPxhBR7wTv=w526-h296-rw" alt="" />
       <h1 className='text-[1rem] text-[#20242d] font-bold h-10 flex items-center pl-3 bg-[#01eeff] rounded-b-md but2 cursor-pointer proj-text'> <a href="https://bright-trifle-3f142c.netlify.app">OR Code Generator</a></h1>
        </div>
        
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='but4 rounded-t-md' src="https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg" alt="" />
       <h1 className='text-[1rem] text-[#20242d] font-bold h-10 flex items-center pl-3 bg-[#01eeff] rounded-b-md but2 cursor-pointer proj-text'><a href="">E-Commerce Website</a></h1>
        </div>
        
    </div>

    <div className='text-center col-span-2 mt-5'>
            <button data-aos="zoom-in"  data-aos-duration="1000" type='submit' className='bg-[#01eeff] h-12 w-[15vw] text-[1rem] rounded-3xl text-[#20242d] font-bold but2 mt-5  buttt' >See More...</button>
        </div>
    </div>
  )
}

export default Projects
