import React from 'react'

const Greet = (props) => {
  return (
    <div className='h-[93vh] flex justify-center items-center flex-col text-[2.5rem] text-white greet-one'>
      <h1 className='text-[3rem]'><span className='text-[5rem]'>H</span>ello <span className='text-[#01eeff] font-bold capitalize'> {props.fname} {props.lname}</span></h1>
<h1 > Thank you for your Valuable <span className='mes'>Message</span></h1>
<h1>We will Contact You by - <span className='text-[#01eeff] font-bold '>{props.email} </span></h1>
    </div>
  )
}

export default Greet;