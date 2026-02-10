import { FaChevronUp , FaChevronDown } from "react-icons/fa";
import jetstar from "../assets/images/jetstar.png"
import expedia from "../assets/images/expedia.png"
import qantas from "../assets/images/qantas.png"
import alitalia from "../assets/images/alitalia.png"
import axon from "../assets/images/axon.png"
export default function Testimonials() {
  return (
    <section className="w-full bg-white mr-24 py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        
        <div>
          <p className="text-sm tracking-widest font-semibold text-gray-600 mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            What People Say <br /> About Us.
          </h2>

      
          <div className="flex gap-3 mt-10">
            <span className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </div>
        </div>

        
        <div className="relative">
          
          <div className="absolute -right-14 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button className="w-10 h-10  flex items-center justify-center ">
              <FaChevronUp className="text-gray-400 hover:text-gray-600" />
            </button>
            <button className="w-10 h-10  flex items-center justify-center">
            <FaChevronDown className="text-black hover:text-gray-600"/>
            </button>
          </div>

          
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg relative">
            
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mike Taylor"
              className="w-16 h-16 rounded-full absolute -top-10 -left-2 border-4 border-white"
            />

            <p className="text-gray-600 leading-relaxed mt-4">
              “On the Windows talking painted pasture yet its
              <br/>
              express parties use. Sure last upon he same as
              <br/>
              knew next. Of believed or diverted
              no.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">Mike taylor</p>
              <p className="text-sm text-gray-500">Lahore, Pakistan</p>
            </div>
          </div>

          
          <div className="absolute flex flex-col justify-end items-start -bottom-18 right-0  rounded-xl shadow-md p-6 w-80 h-50   opacity-60">
            <p className="font-semibold text-gray-900">Chris Thomas</p>
        
            <p className="text-sm text-gray-700">CEO of Red Button</p>
          </div>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-70">
          
          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl"><img src={axon} alt="axon" className="h-24" /></a>
          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl"><img src={jetstar} alt="jet" className="h-16" /></a>
          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl"><img src={expedia} alt="expedia" className="h-12" /></a>
          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl"><img src={qantas} alt="qantas" className="h-32" /></a>
          <a href="/" className="hover:bg-white hover:shadow-2xl rounded-2xl"><img src={alitalia} alt="alitalia" className="h-24" /></a>
        </div>
      </div>
    </section>
  );
}
