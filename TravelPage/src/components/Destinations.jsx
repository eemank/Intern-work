import DestinationCard from "./DestinationCard";
import destinations from "../Data/destinations";

export default function Destinations() {
  return (
    <section id="destination" className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6 text-center">

    
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Top Selling
        </p>
        <h2 className="text-4xl font-bold font-serif text-gray-900 mb-14">
          Top Destinations
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((item) => (
            <DestinationCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
