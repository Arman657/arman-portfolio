import React from 'react'

const Register = (props) => {
 
  return (
    <div className='h-[93vh] flex justify-center items-center bg-[#20242d]' id='contact'>
      <div className=' w-[70vw] m-auto hhh-one cont-top'  data-aos="fade-up" data-aos-duration="2000">
    <h1 className='text-center text-[3rem] text-white font-bold'>Contact <span className='text-[#01eeff] '>Me</span> </h1>
    <form action="" onSubmit={props.submit}>


      <div className='grid grid-cols-2 gap-2 relative mt-5 register-one'>

    
        
         
        
         <input type="text" name='fname' placeholder='First Name' className='  bg-[#323846]   rounded-md h-12   text-[1.1rem] px-[20px] text-[#01eeff] rr-one' id='fname' />
         
       
          
           <input type="text" name='lname' placeholder='Last Name' className='  bg-[#323846]   rounded-md h-12   text-[1.1rem] px-[20px] text-[#01eeff] rr-one'/>
           <input type="email" name='email' placeholder='Email' className='  bg-[#323846]   rounded-md h-12   text-[1.1rem] px-[20px] text-[#01eeff] rr-one'/>
           <input type="text" name='mno' placeholder='Mobile No.' className='  bg-[#323846]   rounded-md h-12   text-[1.1rem] px-[20px] text-[#01eeff] rr-one'/>
   

<textarea name="text" id="" placeholder='Your Message' className='text-[#01eeff]  bg-[#323846]  rounded-md h-[40vh]  col-span-2 text-[1.1rem] px-[20px] py-[20px] rr-two'></textarea>
   
           
    

        <div className='text-center col-span-2 '>
            <button type='submit' className='bg-[#01eeff] h-12 w-[15vw] text-[1rem] rounded-3xl text-[#20242d] font-bold but2 mt-5 buttt' >Send Message</button>
        </div>
        </div>


    </form>
    </div>
    </div>
  )
}

export default Register;