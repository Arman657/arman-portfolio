import React, { createContext, useState } from 'react'
import Greet from './Greet'
import Register from './Register'



const Contact = (props) => {
 
  const [data,setData]=useState({
    fname:null,
    lname:null,
    email:null,
    mno:null,
    text:null,
    isContact:false,
    
  })

 
  const submitHandler=(event)=>{
    event.preventDefault();
    const fname=event.target.fname.value;
    const lname=event.target.lname.value;
    const email=event.target.email.value;
    const mno=event.target.mno.value;
    const text=event.target.text.value;

  
    
    setData({fname,lname,mno,text,email,isContact:true},()=>{
      console.log(data)
    })

  }


  return (
    <div>
   {data.isContact===true? <Greet fname={data.fname} lname={data.lname} email={data.email}/>: <Register submit={submitHandler}/>}
    </div>
  )
}

export default Contact;