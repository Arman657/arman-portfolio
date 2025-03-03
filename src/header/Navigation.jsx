import React from 'react'
import { NavLink } from 'react-router-dom'
import header from './header.css'
import { useAuth0 } from "@auth0/auth0-react";


const Navigation = () => {
  const { logout} = useAuth0();

  const colorChanged=()=>{
   document.getElementById('back').style.backgroundColor='#20242d';
   document.getElementById('slidNavid').style.backgroundColor='#323846';
   
  
  }
  const colorChanged2=()=>{
   document.getElementById('back').style.backgroundColor='#323846';
   document.getElementById('slidNavid').style.backgroundColor='#20242d';
  
  }
 
 
  const moveNavigation=()=>{
document.getElementById('bar').style.display='none';
document.getElementById('slidNavid').classList.add('toggle2');
document.getElementById('slidNavid').style.display='block';



document.getElementById('cut').style.display='block';
document.querySelector('#slidNavid').classList.remove('toggle3');
document.getElementById('bar').classList.remove('toggle');


  }

  const moveCut=()=>{
    document.getElementById('cut').style.display='none';
    document.getElementById('bar').style.display='block';
   document.getElementById('bar').classList.add('toggle');

  //  document.getElementById('slidNavid').style.display='none';
  
   document.getElementById('slidNavid').classList.add('toggle3');
   document.querySelector('#slidNavid').classList.remove('toggle2');
   setTimeout(() => {
    document.getElementById('slidNavid').style.display='none';
   }, 290);
 
  }



const slidHide=()=>{
  document.getElementById('cut').style.display='none';
  document.getElementById('bar').style.display='block';
 document.getElementById('bar').classList.add('toggle');

 setTimeout(() => {
  document.getElementById('slidNavid').style.display='none';
 }, 250);

 document.getElementById('slidNavid').classList.add('toggle3');
 document.querySelector('#slidNavid').classList.remove('toggle2');


}



  return (
    <div className='mt-0 nava' id='nav' >
   
    
      <nav className='flex pr-7 items-center mt-0 text-white h-[7vh] justify-between pl-7' id='top'>
      <h1 className='font-semibold text-[2rem] port'>Portfolio.</h1>
      <i class="fa-solid fa-bars"   onClick={moveNavigation} id='bar' ></i>  
      <i class="fa-solid fa-xmark cut1" onClick={moveCut}   id='cut'></i>

      
      <div className='flex list-none  pr-7 items-center mt-0 text-white h-[5vh] text-[1.1rem] nav'>
    
      
        <NavLink to={'/'}  className='px-5'>
        <li>Home</li>
        </NavLink>
        <NavLink to={'/about'}  className='px-5'>
        <li>About Us</li>
        </NavLink>
        <NavLink to={'/contact'}  className='px-5'>
        <li>Contact</li>
        </NavLink>
        <NavLink to={'/myprojects'}  className='px-5'>
        <li>Projects</li>
        </NavLink>
        <NavLink to={'/assignment'}  className='px-5'>
        <li>Assignment</li>
        </NavLink>
        
      
        {/* <NavLink to={'/logout'} className='px-5 hover:text-[#01eeff]' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><li>Logout</li></NavLink> */}
        </div>


        <div className='slidNav' id='slidNavid' onClick={slidHide} >
    
      
        <NavLink to={'/'}   className='py-5 flex items-center justify-center'>
        <p className='under pr-7' id='under'>Home</p>
        </NavLink>
        <NavLink to={'/about'}  className='py-3 flex items-center justify-center '>
        <p className='under pr-7' >About Us</p>
        </NavLink>
        <NavLink to={'/contact'}  className='py-3 flex items-center justify-center'>
        <p className='under pr-7'>Contact</p>
        </NavLink>
        <NavLink to={'/myprojects'}  className='py-3 flex items-center justify-center  '>
        <p className='under pr-7'>Projects</p>
        </NavLink>
        <NavLink to={'/assignment'}  className='py-3 flex items-center justify-center'>
        <p className='under pr-3'>Assignment</p>
        </NavLink>
        
      
        {/* <NavLink to={'/logout'} className='py-3 flex items-center justify-center hover:text-[#01eeff]' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><li className='pr-7'>Logout</li></NavLink> */}
        </div>




        
      </nav>
    </div>
  )
}

export default Navigation;