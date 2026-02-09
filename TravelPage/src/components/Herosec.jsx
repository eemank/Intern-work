import React from 'react'
import bgimg from "../assets/images/bgimg.png";
import { IoMdPlay } from "react-icons/io";


const Herosec = () => {
  return (
    <div className='flex justify-between pb-46 items-center'>
      <img src={bgimg} alt='blob'
       className="absolute top-0 right-0 scale-70 origin-top-right"
     />
     <div className=' relative z-10 mt-16 pl-26 max-w-xl space-y-3'>
       <p className='text-sm uppercase tracking-widest text-orange-400 font-bold'>Best Destinations Around the World</p>
       <h1 className='text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight'>Travel,{" "}
       <span className='relative inline-block'>
           enjoy
         <span
          className='absolute left-0 bottom-2 w-full h-2 bg-red-500 -z-10  '
           style={{transform: "rotate(-2deg)"}}></span>
        </span>{" "}and live a new and full life</h1>
        <p className='text-gray-600 text-sm w-90 leading-relaxed text-justify'>
          Built Wicket longer admire do
          barton vanity itself do in it.
          preferred to sportsmen it
          engrossed listening. park gate
          sell they west hard for the.</p>
        <div className='flex items-center pt-2 gap-7'>
          <button 
          className='bg-orange-400 text-sm text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-500 transition'>
            Find out more
          </button>
          <a 
          href='https://youtu.be/Zcx247sfxPM?si=-3wgemQ0aPQZjtP9'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-4 cursor-pointer'>
            <div className='w-10 h-10 flex items-center justify-center bg-red-400 rounded-full text-white'>
              <IoMdPlay  size={14}/>
            </div>
            <span className='text-gray-600 text-sm'>Play Demo</span>
          </a>
        </div>
        
     </div>
    </div>
  )
}

export default Herosec
