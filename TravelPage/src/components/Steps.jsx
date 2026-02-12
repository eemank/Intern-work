import { RiLeafFill } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { PiJeepLight } from "react-icons/pi";
import { GrSwim } from "react-icons/gr";
import { BsBoundingBox } from "react-icons/bs";
export default function Steps() {
  return (
    <section className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-2">
            Easy and Fast
          </p>

          <h1 className="text-4xl lg:text-5xl font-semibold font-serif text-gray-900 leading-tight mb-10">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>

          
          <div className="space-y-8">
            <Step
              color="bg-yellow-400"
              icon={<BsBoundingBox />}
              title="Choose Destination"
              text={
              <>Lorem ipsum dolor sit amet, consectetur
              <br/>
              adipiscing elit. Urna, tortor tempus.</>
              }
            />
            <Step
              color="bg-orange-500"
              icon={<GrSwim />}
              title="Make Payment"
              text={
              <>Lorem ipsum dolor sit amet, consectetur
              <br/>
              adipiscing elit. Urna, tortor tempus.</>
              }
            />
            <Step
              color="bg-teal-600"
              icon={<PiJeepLight />}
              title="Reach Airport on Selected Date"
              text={
              <>Lorem ipsum dolor sit amet, consectetur
              <br/>
              adipiscing elit. Urna, tortor tempus.</>
              }
            />
          </div>
        </div>

        
        <div className="relative flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl p-5 w-80">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Trip"
              className="rounded-2xl h-40 w-full object-cover"
            />

            <h3 className="mt-4 font-semibold text-base">
              Trip To Greece
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              14–29 June | by Robbin jo
            </p>

        
            <div className="flex gap-4  mt-4 text-gray-500">
              <RiLeafFill className=" rounded-full bg-gray-200 p-1 h-6 w-6" />
              <FiMap className=" rounded-full bg-gray-200 p-1 h-6 w-6"  />
              <IoIosSend className=" rounded-full bg-gray-200 p-1 h-6 w-6"  />
              
    
            </div>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <span>24 people going</span>
              <span className="text-indigo-600 text-2xl">♡</span>
            </div>
          </div>

          
          <div className="absolute right-18 bottom-12 bg-white rounded-2xl shadow-lg p-4 w-52">
            <p className="text-xs font-sans text-gray-400">Ongoing</p>
            <h4 className="font-semibold text-sm mt-1">
              Trip to rome
            </h4>

            <p className="text-xs text-gray-500 mt-2">
              <span className="text-indigo-400 font-medium">40%</span> completed
            </p>

            <div className="w-full bg-gray-200 h-1 rounded-full mt-2">
              <div className="w-2/5 bg-indigo-400 h-1 rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Step({ color,icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
        {icon}
        
      </div>
      <div>
        <h4 className="font-bold text-gray-500">
          {title}
        </h4>
        <p className="text-gray-500 text-base  mt-1 max-w-md">
          {text}
        </p>
      </div>
    </div>
  );
}


