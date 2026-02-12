import { FaLocationArrow } from "react-icons/fa";

export default function DestinationCard({ image, location, price, days }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-left hover:-translate-y-2 transition duration-300">
      
      
      <img
        src={image}
        alt={location}
        className="h-72 w-full object-cover"
      />

      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-500">
            {location}
          </h3>
          <span className="text-lg font-semibold text-gray-500">
            {price}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-900">
          <FaLocationArrow />
          <span>{days}</span>
        </div>
      </div>
    </div>
  );
}
