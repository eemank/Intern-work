import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white  pl-5 ">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          
          <div>
            <Link to="/" className="text-3xl pl-0 font-bold text-slate-900">
              Jadoo.
            </Link>
            <p className="mt-4 text-xs text-slate-500 max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500">
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/mobile" className="footer-link">Mobile</Link></li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li><Link to="/help" className="footer-link">Help / FAQ</Link></li>
              <li><Link to="/press" className="footer-link">Press</Link></li>
              <li><Link to="/affiliates" className="footer-link">Affiliates</Link></li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-extrabold text-slate-900 mb-4">More</h3>
            <ul className="space-y-2 text-gray-500">
              <li><Link to="/airline-fees" className="footer-link">Airlinefees</Link></li>
              <li><Link to="/airlines" className="footer-link">Airline</Link></li>
              <li><Link to="/tips" className="footer-link">Low fare tips</Link></li>
            </ul>
          </div>

          
          <div className="flex flex-col items-start md:items-start">

            <div className="flex md:justify-end items-start gap-4 mb-6">
              <a href="#" className="social-icon py-2 px-2 border rounded-full border-gray-100 shadow">
                <FaFacebookF className="" />
              </a>
              <a href="#" className="social-icon py-2 px-2 border rounded-full border-gray-100 shadow bg-linear-to-r from-pink-300 via-purple-400 to-yellow-300">
                <FaInstagram className="" />
              </a>
              <a href="#" className="social-icon py-2 px-2 border rounded-full border-gray-100 shadow">
                <FaTwitter />
              </a>
            </div>

            <p className="text-slate-500 text-sm mb-4">Discover our app</p>

            <div className="flex md:justify-end gap-3 text-xs">
             <a
               href="#"
               className="flex items-center gap-3 px-4 py-0 bg-black text-white border border-black rounded-full"
              >
              <FaGooglePlay className="text-2xl shrink-0" />
              <span className="flex flex-col items-start leading-tight whitespace-nowrap">
               <span className="text-[10px] font-semibold uppercase tracking-wide leading-none ">
                Get it on
               </span>
               <span className="text-xs  uppercase leading-none">
                Google Play
               </span>
             </span>
            </a>
            <a
             href="#"
             className="flex items-center gap-3 px-4 py-2 bg-black text-white border border-black rounded-full"
             >
            <FaApple className="text-2xl shrink-0" />
            <span className="flex flex-col items-start leading-tight whitespace-nowrap">
              <span className="text-[10px] leading-none tracking-wide">
              Available on
              </span>
      
              <span className="text-xs leading-none font-semibold">
              App Store
              </span>
            </span>
           </a>
         </div>
       </div>
    </div>

      <p className="text-center text-gray-600 text-sm mt-10">
          All rights reserved@jadoo.co
      </p>
  </div>
    </footer>
  );
}
