import weather from "../assets/images/weather.png";
import plane from "../assets/images/plane.png";
import mik from "../assets/images/mik.png";
import gear from "../assets/images/gear.png";

export default function Services() {
  return (
    <section className="relative bg-white py-24">
      <div className="absolute right-10 top-10 grid grid-cols-5 gap-3 opacity-40">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className={`h-4 w-4 ${
              i === 12 ? "text-indigo-600" : "text-gray-300"
            }`}
          >
            +
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-gray-500">
          CATEGORY
        </p>

        <h2 className="mb-16 text-4xl font-extrabold font-serif text-slate-900">
          We Offer Best Services
        </h2>

       <div className="grid grid-cols-1 gap-12 md:grid-cols-4 items-start">
         <div className=" relative flex flex-col items-center text-center px-6">
           <div className="absolute top-8 right-22 h-10 w-10  rounded-br-[12px] rounded-[3px] bg-amber-100 z-0" />
         <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl ">
         <img src={weather} alt="weather" className=" relative h-20 w-20 object-contain" />
         </div>
         <h3 className="mb-3 text-lg font-semibold text-slate-900">
          Calculated Weather
         </h3>
         <p className="w-[140px] text-sm leading-relaxed text-gray-500 line-clamp-3">
        Built Wicket longer admire do barton vanity itself do in it.
         </p>
         </div>
       <div className="relative flex flex-col items-center text-center px-6">
        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-tl-[40px] rounded-br-[10px] bg-orange-500 z-0" />

       <div className="relative z-10 flex flex-col items-center w-60 h-64 text-center bg-white p-2 rounded-2xl shadow-xl">
         <div className="absolute top-3 left-17 h-10 w-10  rounded-bl-[12px] rounded-[3px] bg-amber-100 z-0" />
        <div className="mb-6 flex h-16 w-16 items-center justify-center">
        <img src={plane} alt="plane" className=" relative h-20 w-20 object-contain" />
       </div>

      <h3 className="mb-3 text-lg font-semibold text-slate-900">
        Best Flights
      </h3>
      <p className="w-[140px] text-sm leading-relaxed text-gray-500 line-clamp-3">
       Engrossed listening. Park gate sell they west hard for the.
      </p>

      </div>
      </div>
      <div className="flex relative flex-col items-center text-center px-6">
        <div className="absolute top-1 right-25 h-10 w-10  rounded-tr-[14px] rounded-[2px]  bg-amber-100 z-0" />
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
         <img src={mik} alt="mik" className=" relative h-14 w-14 object-contain" />
       </div>

        <h3 className="mb-3 text-lg font-semibold text-slate-900">
         Local Events
       </h3>
       <p className="w-[140px] text-sm leading-relaxed text-gray-500 line-clamp-3">
        Barton vanity itself do in it. Preferd to men it engrossed listening.
       </p>
     </div>

  
  <div className="flex relative flex-col items-center text-center px-6">
    <div className="absolute top-5 right-22 h-10 w-10  rounded-bl-[12px] rounded-[2px] bg-amber-100 z-0" />
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl ">
      <img src={gear} alt="gear" className="relative h-10 w-10 object-contain" />
    </div>

    <h3 className="mb-3 text-lg font-semibold text-slate-900">
      Customization
    </h3>

    <p className="w-[140px] text-sm leading-relaxed text-gray-500 line-clamp-3">
      We deliver outsourced aviation services for military customers
    </p>
  </div>

</div>

      </div>
    </section>
  );
}
