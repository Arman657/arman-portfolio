import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amazon from './amazon.jpg';
import flipkart from './flipkart.png';
import probo from './probo.png';
import self from './self.png';

const Assingnment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  
let data=[
    {
        name:'Flipkart Clone',
        img:'https://iconpusher.com/_next/image?url=https%3A%2F%2Fimg.iconpusher.com%2Forg.chromium.webapk.a83f8ed661b7a33d4_v2%2F1.png&w=640&q=75',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime'
    },
    {
        name:'Amazon Clone',
        img:'https://i.pinimg.com/736x/68/40/f3/6840f3293a5d4ddaa70ae6f1e32d93ca.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
    },
    {
        name:'Netflix Clone',
        img:'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
    },
    {
        name:'Probo Clone',
        img:'https://fantasykhiladi.com/wp-content/uploads/2023/09/probo.webp',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
    },
    {
        name:'Portfolio Clone',
        img:'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-portfolio-icon-png-image_708676.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime '
    },
    {
        name:'Groww Clone',
        img:'https://groww.in/groww-logo-270.png',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum maxime'
    },

  ]


return (

<div className='h-[90vh] flex flex-col justify-center items-center bg-[#20242d] slidd' id='assignment' >
<h1 className='text-[3rem] text-white font-bold ' data-aos="fade-up" data-aos-duration="3000">My <span className='text-[#01eeff]'>Assignments</span> </h1>
<div className='w-3/4  text-white ass-one slid'>


    <div className='mt-5  ' data-aos="fade-up" data-aos-duration="2000">
    <Slider {...settings} >
        {data.map((d)=>(
           <div  className='bg-[#323846] h-[450px] text-white rounded-xl hello assh2'>
                <div className='h-56 rounded-t-xl bg-[#323846] flex justify-center items-center '>
                  <img src={d.img} alt="" className='h-44 w-44 rounded-full' />  
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4 asspad'>
                    <p className='text-xl font-semibold'>{d.name}</p>
                    <p className='px-10 text-center assrev'>{d.review}</p>
                    <button className='h-[4.5vh] bg-[#01eeff] text-[#323846] font-bold w-[11vw] px-6 py-1 rounded-3xl but2 assbut'>Click Here</button>

                </div>
            </div>
        ))}

        </Slider>

    </div>
     </div>

     <div className='w-3/4  text-white ass-one slid2'>


    <div className='mt-5 slid3 ' data-aos="fade-up" data-aos-duration="2000">
    
        {data.map((d)=>(
           <div  className='bg-[#323846] h-[450px] text-white rounded-xl hello slid4 assh'>
                <div className='h-56 rounded-t-xl bg-[#323846] flex justify-center items-center '>
                  <img src={d.img} alt="" className='h-44 w-44 rounded-full' />  
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4 slid5'>
                    <p className='text-xl font-semibold slid6'>{d.name}</p>
                    <p className='px-10 text-center'>{d.review}</p>
                    <button className='h-[4.5vh] bg-[#01eeff] text-[#323846] font-bold w-[11vw] px-6 py-1 rounded-3xl but2 butt'>Click Here</button>

                </div>
            </div>
        ))}

        

    </div>
     </div>

     </div>   
);



}


export default Assingnment;

