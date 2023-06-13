import Link from "next/link";
import logo from "../../public/logo.jpg";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Footer() {
  return (
    <div className="bg-gray-900 md:flex justify-between">
      <div className="mx-6 my-4 py-4">
        <Image 
          src={logo}
          alt='Shawn Logo'
          height={60}
          priority={true}  
        />
      </div>

      <div className="text-white flex items-center gap-x-4 px-6 mx-6 my-4">
        <GoLocation size={28} color="white" />
        <p className="text-white">
          Head Office: <br />
          Airway Street, NE, Grand Rapids, MI, USA
        </p>
      </div>

      <div className="text-white flex items-center gap-x-4 px-6 mx-6 my-4">
        <FaPhone size={28} color="white"/>
        <Link className="text-white text-xl" href='tel:+13049974586' target="_blank">Call Us</Link>
      </div>

      <div className="text-white flex items-center gap-x-4 px-6 mx-6 mt-4 pb-4">
        <FaEnvelope size={28} color="white"/>
        <Link className="text-white text-xl" href='mailto:barrjasonjabar@gmail.com' target="_blank">Email Us</Link>
      </div>
    </div>
  )
}