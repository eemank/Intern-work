import { FaChevronUp , FaChevronDown } from "react-icons/fa";
import jetstar from "../assets/images/jetstar.png"
import expedia from "../assets/images/expedia.png"
import qantas from "../assets/images/qantas.png"
import alitalia from "../assets/images/alitalia.png"
import axon from "../assets/images/axon.png"

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 lg:mr-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <p className="text-sm tracking-widest font-semibold text-gray-600 mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            What People Say <br className="hidden sm:block" /> About Us.
          </h2>

          <div className="flex justify-center lg:justify-start gap-3 mt-8 lg:mt-10">
            <span className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mt-16 lg:mt-0">

          {/* ARROWS */}
          <div className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 flex-col gap-4">
            <button className="w-10 h-10 flex items-center justify-center">
              <FaChevronUp className="text-gray-400 hover:text-gray-600" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center">
              <FaChevronDown className="text-black hover:text-gray-600"/>
            </button>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto lg:mx-0 relative">
            
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mike Taylor"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full absolute -top-8 sm:-top-10 -left-2 border-4 border-white"
            />

            <p className="text-gray-600 leading-relaxed mt-6 sm:mt-4 text-sm sm:text-base">
              “On the Windows talking painted pasture yet its
              express parties use. Sure last upon he same as
              knew next. Of believed or diverted
              no.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">Mike taylor</p>
              <p className="text-sm text-gray-500">Lahore, Pakistan</p>
            </div>
          </div>

          {/* SECOND CARD (Hidden on mobile, normal on desktop) */}
          <div className="hidden lg:flex absolute flex-col justify-end items-start -bottom-18 right-0 rounded-xl shadow-md p-6 w-80 h-50 opacity-60">
            <p className="font-semibold text-gray-900">Chris Thomas</p>
            <p className="text-sm text-gray-700">CEO of Red Button</p>
          </div>

        </div>
      </div>

      {/* LOGOS */}
      <div className="max-w-7xl mx-auto px-6 mt-20 lg:mt-32">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-70">
          
          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl">
            <img src={axon} alt="axon" className="h-16 sm:h-20 lg:h-24" />
          </a>

          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl">
            <img src={jetstar} alt="jet" className="h-12 sm:h-14 lg:h-16" />
          </a>

          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl">
            <img src={expedia} alt="expedia" className="h-10 sm:h-12" />
          </a>

          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl">
            <img src={qantas} alt="qantas" className="h-20 sm:h-24 lg:h-32" />
          </a>

          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl">
            <img src={alitalia} alt="alitalia" className="h-16 sm:h-20 lg:h-24" />
          </a>

        </div>
      </div>
    </section>
  );
}

