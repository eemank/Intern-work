import React from 'react'
import bgimg from "../assets/images/bgimg.png";
import { IoMdPlay } from "react-icons/io";


const Herosec = () => {
  return (
    <div className='flex justify-between pb-10 md:pb-40 items-center'>
  <img 
    src={bgimg} 
    alt='blob'
    className="absolute top-0 right-0 scale-65 origin-top-right"
  />

  <div className='relative z-10 mt-12 md:mt-16 px-6 md:pl-26 max-w-xl space-y-4'>
    
    <p className='
     text-[10px] md:text-sm 
     uppercase tracking-widest 
     text-orange-400 font-bold
     leading-relaxed
      max-w-55 sm:max-w-full'>
     Best <br className="sm:hidden" /> Destinations  <br className="sm:hidden" />
      Arround the <br className="sm:hidden" /> World
    </p>
    <h1 className='
     text-3xl sm:text-4xl md:text-6xl
      font-extrabold text-slate-800
      leading-snug md:leading-tight
      max-w-sm sm:max-w-md md:max-w-full'>
      Travel,{" "}
     <span className='relative inline-block'>
      enjoy
      <span
      className='absolute left-0 bottom-1 md:bottom-2 w-full h-1 md:h-2 bg-red-500 -z-10'
      style={{ transform: "rotate(-2deg)" }}
      ></span>
     </span>{" "}
     <br className="sm:hidden" />
     and live a new and full life
   </h1>

    <p className='text-gray-600 text-sm md:text-sm md:w-90 leading-relaxed text-left md:text-justify'>
      Built Wicket longer admire do
      barton vanity itself do in it.
      preferred to sportsmen it
      engrossed listening. park gate
      sell they west hard for the.
    </p>

    <div className='flex items-center pt-2 gap-5 md:gap-7'>
      <button 
        className='bg-orange-400 text-sm text-white px-5 md:px-6 py-3 rounded-lg shadow-md hover:bg-orange-500 transition'>
        Find out more
      </button>

      <a 
        href='https://youtu.be/Zcx247sfxPM?si=-3wgemQ0aPQZjtP9'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-3 md:gap-4 cursor-pointer'>
        
        <div className='w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-red-400 rounded-full text-white'>
          <IoMdPlay size={12} />
        </div>

        <span className='text-gray-600 text-sm'>Play Demo</span>
      </a>
    </div>

  </div>
</div>

  )
}

export default Herosec
