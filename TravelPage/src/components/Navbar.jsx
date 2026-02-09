import React from 'react';
import logo from "../assets/images/logo.webp";


const Navbar = () => {
  const handleclick =()=>{
    alert("button clicked")
  };
  return (
   <nav className="relative z-10">
        <div className=' flex justify-between max-w-[7.5xl] mx-auto px-1 pr-22 '>
            <div className='flex justify-between items-center  h-14'>
                <img src={logo} alt="logo" className='h-8 pl-26 '/>
            </div>
            <div className='flex justify-between items-center text-black gap-18'>
              <a href='#destination'>Destination</a>
              <a href='#hotesls'>Hotels</a>
              <a href='#flights'>Flights</a>
              <a href='#bookings'>Bookings</a>
              <button onClick={handleclick} className='cursor-pointer'>Login</button>
              <button className='border-2 cursor-pointer border-black px-4 rounded'>Signup</button>
              <select>
                <option>EN</option>
                <option>FR</option>
              </select>


            </div>
        </div>
    </nav>
  )
}

export default Navbar
