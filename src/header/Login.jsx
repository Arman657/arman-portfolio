import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='h-[93vh] flex justify-center items-center flex-col' data-aos="zoom-out">
      <h1 className='text-white text-[3rem] mb-10 font-bold log'>!Please <span className='text-[#01eeff]'>Login</span> to See Details </h1>
     <button className=' h-14 w-48 rounded-3xl text-[1.2rem] bg-[#01eeff] but2 font-bold text-[#20242d]' onClick={() => loginWithRedirect()}>Log In</button>
    </div>



  )
}

export default Login;